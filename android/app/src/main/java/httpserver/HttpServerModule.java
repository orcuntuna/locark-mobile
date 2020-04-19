package httpserver;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class HttpServerModule extends ReactContextBaseJavaModule {

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
        Toast.makeText(getReactApplicationContext(), path, Toast.LENGTH_SHORT).show();
    }
    
}
