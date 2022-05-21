const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("entity.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const entityPackage = grpcObject.entityPackage;

// Init the server
const server = new grpc.server();
server.bind("0.0.0.0:40000", grpc.ServerCredentials.createInsecure());

server.addService(entityPackage.Entity.service, {
  createEntity: createEntityFromServer,
  readEntities: readEntitiesFromServer,
  readEntitiesStream: readEntitiesStreamFromServer
});

server.start();

const entitiesArr = [];

const createEntityFromServer = (call, callback) => {
  const entityItem = {
    id: entitiesArr.length + 1,
    text: call.request.text
  };
  entitiesArr.push(entityItem);
  callback(null, entitiesArr);
  console.log(call);
};

const readEntitiesFromServer = (call, callback) => {
  callback(null, { items: entitiesArr });
};

const readEntitiesStreamFromServer = (call, callback) => {
  entitiesArr.forEach((item) => call.write(item));
  call.end();
};
