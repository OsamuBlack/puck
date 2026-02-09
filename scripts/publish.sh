#!/bin/bash

# 1. Get the tag (defaults to netlisian)
TAG=${1:-netlisian}

echo "🚀 Starting local canary deploy with tag: $TAG"

# 2. Build the project first
yarn build

# 3. Use Lerna to version and publish all packages at once
# This replaces all your manual 'cd packages/xxx && npm publish' lines
npx lerna publish --canary \
  --preid $TAG \
  --dist-tag $TAG \
  --force-publish \
  --yes

echo "✅ Published successfully!"