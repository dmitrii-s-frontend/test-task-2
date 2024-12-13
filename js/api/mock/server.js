/* mock of the server */

/* miragejs */
  MirageJS.Server.createServer({
    routes() {
      this.post("test-task-2/ajax/resume-handler.php", () => {
        return new MirageJS.Server.Response(200, { }, "done!");
      });

      // Pass through all unhandled requests.
      this.passthrough();

      // Disable logging
      this.logging = false;
    },
  });

/* miragejs end */