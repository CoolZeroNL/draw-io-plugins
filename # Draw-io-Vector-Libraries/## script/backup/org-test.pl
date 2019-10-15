#!/usr/bin/perl

use strict;
use warnings;

use MIME::Base64;
use Compress::Zlib;

my $code = "Hello world";

# Encode string with base_64.
my $b64 = encode_base64($code, '');
print "Encoded string with base_64: " . $b64 . "\n\n";

# Compress with deflate and then encode with base 64.
my $bufer;
my $d = deflateInit( -WindowBits => -MAX_WBITS);

$bufer  = $d->deflate($code);
$bufer .= $d->flush();

my $out = encode_base64($bufer, '');
print "Encoded and compressed string: " . $out . "\n\n";

# Decode string with base_64.
my $b64decoded = decode_base64($b64);
print "Decode string with base_64: " . $b64decoded . "\n\n";

# Decompres with deflate and then decode with base_64.
my $compresseddata = decode_base64($out);
my $i = inflateInit( -WindowBits => -MAX_WBITS);
my $bufer2;

while ($compresseddata) {
    $bufer2 .= $i->inflate($compresseddata);
}

print "Decoded and decompressed data: " . $bufer2 . "\n\n";