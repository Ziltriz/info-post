'use strict';
import 'jest-preset-angular';
import'core-js/proposals/reflect-metadata'
import 'zone.js/dist/zone.js';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
// eslint-disable-next-line import/no-extraneous-dependencies
import'jest-zone-patch';

import { 
     BrowserDynamicTestingModule, 
     platformBrowserDynamicTesting 
   } 
   from '@angular/platform-browser-dynamic/testing';
import { TestBed } from '@angular/core/testing';
   
   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());