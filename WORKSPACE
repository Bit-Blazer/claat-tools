workspace(name = "googlecodelabs_custom_elements")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

# Required by io_bazel_rules_webtesting.
skylib_ver = "f9b0ff1dd3d119d19b9cacbbc425a9e61759f1f5"
http_archive(
    name = "bazel_skylib",
    sha256 = "ce27a2007deda8a1de65df9de3d4cd93a5360ead43c5ff3017ae6b3a2abe485e",
    strip_prefix = "bazel-skylib-{v}".format(v=skylib_ver),
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/archive/{v}.tar.gz".format(v=skylib_ver),
    ],
)

rules_closure_ver = "0.11.0"
http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "d66deed38a0bb20581c15664f0ab62270af5940786855c7adc3087b27168b529",
    strip_prefix = "rules_closure-{v}".format(v=rules_closure_ver),
    urls = ["https://github.com/bazelbuild/rules_closure/archive/{v}.tar.gz".format(v=rules_closure_ver)],
)
load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")
rules_closure_dependencies()
rules_closure_toolchains()

# NOTE: io_bazel_rules_webtesting and io_bazel_rules_go are only needed for running tests
# They are commented out because npm_dist build doesn't require tests
# If you need to run tests, uncomment the following sections:
#
# http_archive(
#     name = "io_bazel_rules_go",
#     sha256 = "...",
#     urls = ["..."],
# )
# load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
# go_rules_dependencies()
# go_register_toolchains()
#
# http_archive(
#     name = "io_bazel_rules_webtesting",
#     sha256 = "...",
#     urls = ["..."],
# )
# load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")
# web_test_repositories()

prettify_ver = "2013-03-04"
http_archive(
    name = "prettify",
    build_file = "third_party/BUILD.prettify",
    strip_prefix = "code-prettify-{v}".format(v=prettify_ver),
    urls = ["https://github.com/google/code-prettify/archive/{v}.zip".format(v=prettify_ver)],
)

http_archive(
    name = "polyfill",
    build_file = "third_party/BUILD.polyfill",
    sha256 = "9606cdeacbb67f21fb495a4b0a0e5ea6a137fc453945907822e1b930e77124d4",
    strip_prefix = "custom-elements-1.0.8",
    urls = ["https://github.com/webcomponents/custom-elements/archive/v1.0.8.zip"],
)

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "f2194102720e662dbf193546585d705e645314319554c6ce7e47d8b59f459e9c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.2.2/rules_nodejs-2.2.2.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories()

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "e1af475dacad99c675042fcb3bf15dfaa197a3759821f0244f1b210d4f04d468",
    strip_prefix = "rules_sass-1.24.0",
    urls = ["https://github.com/bazelbuild/rules_sass/archive/1.24.0.tar.gz"],
)

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()
