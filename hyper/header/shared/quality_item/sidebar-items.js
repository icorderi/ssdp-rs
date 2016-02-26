initSidebarItems({"fn":[["q","Convenience function to create a `Quality` from a float."],["qitem","Convinience function to wrap a value in a `QualityItem` Sets `q` to the default 1.0"]],"struct":[["Quality","Represents a quality used in quality values.Can be created with the `q` function.Implementation notesThe quality value is defined as a number between 0 and 1 with three decimal places. This means there are 1000 possible values. Since floating point numbers are not exact and the smallest floating point data type (`f32`) consumes four bytes, hyper uses an `u16` value to store the quality internally. For performance reasons you may set quality directly to a value between 0 and 1000 e.g. `Quality(532)` matches the quality `q=0.532`.RFC7231 Section 5.3.1 gives more information on quality values in HTTP header fields."],["QualityItem","Represents an item with a quality value as defined in RFC7231."]]});