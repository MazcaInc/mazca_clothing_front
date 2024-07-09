// env.d.ts
interface ImportMetaEnv {
    readonly APP_URL: string;
    readonly APP_STAGE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
