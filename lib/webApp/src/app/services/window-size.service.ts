import {HostListener, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowSizeService {

    constructor() {}

    private innerWidth;

    // can be: phone tablet computer
    public static windowSize;

    public onResize(size) {
        this.innerWidth = size;
        if(this.innerWidth > 1920) WindowSizeService.windowSize = 'computer';
        else if(this.innerWidth <= 1920 && this.innerWidth > 1280) WindowSizeService.windowSize = 'computer';
        else if(this.innerWidth <= 1280 && this.innerWidth > 600) WindowSizeService.windowSize = 'tablet';
        else if(this.innerWidth <= 600) WindowSizeService.windowSize = 'phone';
    }

    static getWidth(){
        return WindowSizeService.windowSize
    }
}
