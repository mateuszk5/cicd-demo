#!/usr/bin/env bash
set -euo pipefail
VERSION="${1:-dev}"

for dir in app services/*; do
  [ -f "$dir/Dockerfile" ] || continue
  name=$(basename "$dir"); [ "$dir" = "app" ] && name="monolith"
  echo "==> Build $name:$VERSION"
  (cd "$dir" && npm ci && npm test)
  docker build -t "cicd-demo-$name:$VERSION" --build-arg APP_VERSION="$VERSION" "$dir"
done