const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("entity.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const entityPackage = grpcObject.entityPackage;

const client = new entityPackage.Entity(
  "localhost:40000",
  grpc.credentials.createInsecure()
);

const text = process.argv[2];
client.createEntity(
  {
    id: -1,
    text
  },
  (err, res) => {
    console.log("Received response from the server: ", JSON.stringify(res));
  }
);

client.readEntities({}, (err, res) => {
  console.log("Read entities response from the server: ", JSON.stringify(res));
});

const call = client.readEntitiesStream();
call.on("data", (item) => {
  console.log(
    "Received streaming item from the server: ",
    JSON.stringify(item)
  );
});
call.on("end", () => console.log("Server done!"));
