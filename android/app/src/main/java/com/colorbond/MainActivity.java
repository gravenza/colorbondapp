package com.colorbond;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.content.Intent;
//import com.reactlibrary.RNDeviceTokenPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    @Override
    public void onNewIntent(Intent intent) {
      super.onNewIntent(intent);
      setIntent(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
    }

    @Override
    protected String getMainComponentName() {
        return "Colorbond";
    }
}
