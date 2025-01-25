import type { ConnectRouter } from "@connectrpc/connect";
import { ExampleService } from "@repo/proto/example_pb.js";

export default (router: ConnectRouter) =>
  router.service(ExampleService, {
    async sayHello(req) {
      return {
        greeting: `Hello, ${req.name}!`,
      };
    },
  });
