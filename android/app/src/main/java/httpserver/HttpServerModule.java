package httpserver;

import android.os.Build;
import android.system.ErrnoException;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.koushikdutta.async.http.Multimap;
import com.koushikdutta.async.http.server.AsyncHttpServer;
import com.koushikdutta.async.http.server.AsyncHttpServerRequest;
import com.koushikdutta.async.http.server.AsyncHttpServerResponse;
import com.koushikdutta.async.http.server.HttpServerRequestCallback;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.util.ArrayList;
import java.util.Objects;

public class HttpServerModule extends ReactContextBaseJavaModule {
    AsyncHttpServer server = new AsyncHttpServer();

    private final ReactApplicationContext reactContext;

    public HttpServerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "HttpServer";
    }

    @ReactMethod
    public void startServer(String path, int port) {
        server.get("/files", new HttpServerRequestCallback() {
            @RequiresApi(api = Build.VERSION_CODES.KITKAT)
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                ArrayList<FilesJson> filesJson = new ArrayList<>();
                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                String path = Objects.requireNonNull(reactContext.getExternalFilesDir(null)).getAbsolutePath();
                File files = new File(path);

                for (File file : files.listFiles()) {
                    filesJson.add(new FilesJson(0, file.getName(), file.length()));
                }
                String str = (gson.toJson(filesJson));
                response.send(str);
            }
        });
        server.get("/downloads", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                System.out.println(request.getQuery().getString("name"));
                System.out.println("buraya girdi");
                try {
                    String name = request.getQuery().getString("name");
                    String path = Objects.requireNonNull(reactContext.getExternalFilesDir(null)).getAbsolutePath() + "/" + name;
                    File file = new File(path);
                    if (file.isFile()) {
                        response.sendFile(file);
                    } else {
                        response.send("{\n\"status\":0\n}");
                    }
                } catch (Error err) {
                    response.send("{\n\"status\":0,\n" +
                            "\"error\":\"Please send body data as name\"\n}");
                }
            }

        });
        server.listen(port);
    }

}
