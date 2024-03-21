import { PostgreSqlContainer } from '@testcontainers/postgresql';

async function startPostgresContainer() {
  const postgresContainer = await new PostgreSqlContainer()
    .withCommand(["sleep", "infinity"])
    .withName('db')
    .withUsername('postgres')
    .withPassword('password')
    .withDatabase('customer-portal')
    .withExposedPorts({
      container: 5432,
      host: 5432
    })
    .start();

    const uri = postgresContainer.getConnectionUri();

    console.log(`PostgreSQL container started on ${uri}`);
}

startPostgresContainer().catch(console.error);