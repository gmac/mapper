//= require "vendor/jquery"
//= require "vendor/underscore"
//= require "vendor/backbone"
//= require "vendor/backbone.epoxy"
//= require "vendor/papaparse"

//= require "mapper/mapdata"
//= require "mapper/main"
//= require "mapper/models/settings"
//= require "mapper/models/fills"
//= require "mapper/models/strokes"
//= require "mapper/models/geographies"

//= require "mapper/views/map-data"
//= require "mapper/views/map-preview"
//= require "mapper/views/editor-main"
//= require "mapper/views/editor-settings"
//= require "mapper/views/editor-style-base"
//= require "mapper/views/editor-style-fill"
//= require "mapper/views/editor-style-stroke"

//= require "mapper/interactive"

$(function() { Mapper.init(); });