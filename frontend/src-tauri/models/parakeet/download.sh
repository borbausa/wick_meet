#!/usr/bin/env bash
# Download Parakeet v2 INT8 model files from HuggingFace
# Run this once to populate the bundled models directory

set -e

DIR="$(cd "$(dirname "$0")/../.." && pwd)"
TARGET="$DIR/parakeet/parakeet-tdt-0.6b-v2-onnx-int8"
BASE="https://huggingface.co/istupakov/parakeet-tdt-0.6b-v2-onnx/resolve/main"

mkdir -p "$TARGET"

FILES=(
    "encoder-model.int8.onnx"
    "decoder_joint-model.int8.onnx"
    "nemo128.onnx"
    "vocab.txt"
)

for f in "${FILES[@]}"; do
    if [ -f "$TARGET/$f" ]; then
        echo "SKIP $f (already exists)"
    else
        echo "DOWNLOAD $f ..."
        curl -fSL -o "$TARGET/$f" "$BASE/$f"
    fi
done

echo "Done. Model files in: $TARGET"
ls -lh "$TARGET"
