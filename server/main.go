package main

import "net/http"

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", handleRoot)

	http.ListenAndServe(":8080", mux)
}


funct handleRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hellow, world!")
}