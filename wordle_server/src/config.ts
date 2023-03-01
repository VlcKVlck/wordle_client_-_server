export interface AppConfig {
  host: string;
  port: number;
  db: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}

function env<T = string>(key: string, defaultValue: T): T {
  return (process.env[key] ?? defaultValue) as T;
}

export default function config(): AppConfig {
  return {
    host: env('APP_HOST', '0.0.0.0'),
    port: env<number>('APP_PORT', 3333),
    db: {
      host: env('APP_DB_HOST', 'localhost'),
      user: env('APP_DB_USER', 'postgres'),
      password: env('APP_DB_PASS', '12345678'),
      database: env('APP_DB_DB', 'wordle'),
    },
  };
}
