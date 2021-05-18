import React, { useState } from 'react';
export default class Controller{
    constructor() {
        
        this.string1 = "xD :)"
        this._changeState();
    }
    _changeState(){
        setInterval( () => { this.string1 = Math.floor(Math.random()*10); }, 3000);
        
    }
}