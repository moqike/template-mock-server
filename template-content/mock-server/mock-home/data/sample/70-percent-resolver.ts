async function resolver(ctx, next, server) {
  const result = await Promise.resolve({
    data: {
      percent: 70
    }
  });
  server.useScenario('sample', '80-percent');
  return result;
}

export default resolver;