import {renderer} from "./lib";
import start from "./binding";

renderer(
    document.getElementById('root'),
    start(),
);

/*
* https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel
* https://www.techtarget.com/whatis/definition/Model-View-ViewModel#:~:text=Model%2DView%2DViewModel%20(MVVM)%20is%20a%20software%20design,Ken%20Cooper%20and%20John%20Gossman.
* https://metanit.com/sharp/wpf/22.1.php
* https://www.guru99.com/mvc-vs-mvvm.html
* */
