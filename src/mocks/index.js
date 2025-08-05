async function enableApiMocking() {
  if (process.env.NODE_ENV !== "development") {
    // We only enable mocking in the development environment.
    return;
  }

  // Dynamically import the MSW setup code.
  const { worker } = await import("./browser");
  await worker.start();
}

enableApiMocking();
