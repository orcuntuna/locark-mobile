package httpserver;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.koushikdutta.async.http.server.AsyncHttpServer;
import com.koushikdutta.async.http.server.AsyncHttpServerRequest;
import com.koushikdutta.async.http.server.AsyncHttpServerResponse;
import com.koushikdutta.async.http.server.HttpServerRequestCallback;
import com.koushikdutta.async.parser.JSONArrayParser;

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
    public void startServer(String path, int port){
        server.get("/files", new HttpServerRequestCallback() {
            @RequiresApi(api = Build.VERSION_CODES.KITKAT)
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                FilesJson filesJson = new FilesJson();
                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                String path = Objects.requireNonNull(reactContext.getExternalFilesDir(null)).getAbsolutePath();
                File files = new File(path);

                for (File size : files.listFiles()) {
                    filesJson.addName(size.getName());
                    filesJson.addSize(size.length());
                    filesJson.addStatus(0);
                }
                String str = gson.toJson(filesJson);
                response.send(str);
            }
        });
        server.listen(port);
    }

}
