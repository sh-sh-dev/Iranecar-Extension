# Iranecar Registration Helper

This extension will help you to register faster.

### Supported Browsers

* Brave (Suggested)
* Chrome
* Firefox

### How to Install

#### Chrome and Brave:

1. Open [chomre://extensions](chrome://extensions) and turn on `Developer Mode`
2. Click on `Load unpacked`
3. Select folder of this extension

#### Firefox:

1. Delete `manifest.json`, then rename `manifest-firefox.json` to `manifest.json` Or simply just run this command:
```shell script
mv manifest.json manifest-chrome.json
mv manifest-firefox.json manifest.json
```
2. Open [about:debugging](about:debugging)
3. Click on `This Firefox` (placed at the sidebar)
4. Click on `Load Temporary Add-on...`
5. Select the `manifest.json` (which you renamed from `manifest-firefox.json` at first step) 

## More tricks about Iranecar

### Fix enamad

The enamad servers are too slow, and they usually take long time to load, so it's better to don't load them at all!

Add this line to /etc/hosts (tha path is different in Windows):
```shell script
127.0.0.1   trustseal.enamad.ir
```

### Bypass Google reCaptcha

#### Use a clean and private IP
* Don't fill form using public networks.
* Reset your network (ADSL or Cellular) around 30 minutes before registration.

#### Login to your Google account
Let Google know you! Login to your account using the browser you want to register using it.

### Fix blank buy items

Use Brave browser. 

