initSidebarItems({"fn":[["new_protocol","A convenience method that creates a default `Http2Protocol` that uses a `net::HttpConnector` (which produces an `HttpStream` for the underlying transport layer)."]],"struct":[["Http2Message","An implementation of the `HttpMessage` trait for HTTP/2.Relies on the `solicit::http::SimpleClient` for HTTP/2 communication. Adapts both outgoing and incoming messages to the API that `hyper` expects in order to be able to use the message in the `hyper::client` module."],["Http2Protocol","The `Protocol` implementation that provides HTTP/2 messages (i.e. `Http2Message`)."]],"trait":[["CloneableStream","A trait alias representing all types that are both `NetworkStream` and `Clone`."]]});