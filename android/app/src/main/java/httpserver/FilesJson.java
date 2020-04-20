package httpserver;

import java.util.ArrayList;

public class FilesJson {
    int status;
    String name;
    Long size;

    public FilesJson(int status, String name, Long size) {
        this.status = status;
        this.name = name;
        this.size = size;
    }
}
