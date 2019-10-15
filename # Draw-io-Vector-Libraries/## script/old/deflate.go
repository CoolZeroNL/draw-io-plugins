// save this as deflate.go

package main

import (
    "compress/zlib"
    "io"
    "os"
    "flag"
)

var infile = flag.String("f", "", "infile")

func main() {
    flag.Parse()
    file, _ := os.Open(*infile)

    r, err := zlib.NewReader(file)
    if err != nil {
        panic(err)
    }
    io.Copy(os.Stdout, r)

    r.Close()
}