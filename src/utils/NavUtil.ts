import { JrxStringUtils } from "jrx-ts";

export class NavUtil {
    private constructor() {}

    public static getHomePath() {
        return this.combinePaths("/");
    }

    public static getAttendPath(id: string) {
        return this.combinePaths("attend", id);
    }

    private static combinePaths(...paths: (string | null | undefined)[]) {
        return JrxStringUtils.combine(paths, {
            separator: "/",
        });
    }
}