//This file is just being used once to dynamically load the mentioned module. 

//syntax - import {something} from "directory/path"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)