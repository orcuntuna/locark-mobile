package httpserver;

import java.util.ArrayList;

public class FilesJson {
    ArrayList<Integer> status;
    ArrayList<String> name;
    ArrayList<Long> size;

    public FilesJson() {
        status = new ArrayList<>();
        name = new ArrayList<>();
        size = new ArrayList<>();
    }

    public ArrayList<Integer> getStatus() {
        return status;
    }

    public void setStatus(ArrayList<Integer> status) {
        this.status = status;
    }

    public void addStatus(int status){
        this.status.add(status);
    }

    public ArrayList<String> getName() {
        return name;
    }

    public void setName(ArrayList<String> name) {
        this.name = name;
    }

    public void addName(String name){
        this.name.add(name);
    }

    public ArrayList<Long> getSize() {
        return size;
    }

    public void setSize(ArrayList<Long> size) {
        this.size = size;
    }

    public void addSize(long size) {
        this.size.add(size);
    }

}
