initSidebarItems({"fn":[["from_hex","Convert the given hex character into its numeric value.Examples"],["lossy_utf8_percent_decode","Percent-decode the given bytes, and decode the result as UTF-8.This is “lossy”: invalid UTF-8 percent-encoded byte sequences will be replaced � U+FFFD, the replacement character."],["percent_decode","Percent-decode the given bytes."],["percent_decode_to","Percent-decode the given bytes, and push the result to `output`."],["percent_encode","Percent-encode the given bytes.The returned string is within the ASCII range."],["percent_encode_to","Percent-encode the given bytes, and push the result to `output`.The pushed strings are within the ASCII range."],["utf8_percent_encode","Percent-encode the UTF-8 encoding of the given string.The returned string is within the ASCII range."],["utf8_percent_encode_to","Percent-encode the UTF-8 encoding of the given string, and push the result to `output`.The pushed strings are within the ASCII range."]],"static":[["DEFAULT_ENCODE_SET","This encode set is used for path components."],["FORM_URLENCODED_ENCODE_SET","This encode set is used in `application/x-www-form-urlencoded` serialization."],["HTTP_VALUE_ENCODE_SET","This encode set is used for HTTP header values and is defined at https://tools.ietf.org/html/rfc5987#section-3.2"],["PASSWORD_ENCODE_SET","This encode set should be used when setting the password field of a parsed URL."],["QUERY_ENCODE_SET","This encode set is used in the URL parser for query strings."],["SIMPLE_ENCODE_SET","This encode set is used for fragment identifier and non-relative scheme data."],["USERINFO_ENCODE_SET","This encode set is used in the URL parser for usernames and passwords."],["USERNAME_ENCODE_SET","This encode set should be used when setting the username field of a parsed URL."]],"struct":[["EncodeSet","Represents a set of characters / bytes that should be percent-encoded.See encode sets specification.Different characters need to be encoded in different parts of an URL. For example, a literal `?` question mark in an URL’s path would indicate the start of the query string. A question mark meant to be part of the path therefore needs to be percent-encoded. In the query string however, a question mark does not have any special meaning and does not need to be percent-encoded.Since the implementation details of `EncodeSet` are private, the set of available encode sets is not extensible beyond the ones provided here. If you need a different encode set, please file a bug explaining the use case."]]});