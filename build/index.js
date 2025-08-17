var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/utils/storage.client
var require_storage = __commonJS({
  "empty-module:~/utils/storage.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/utils/auth.client
var require_auth = __commonJS({
  "empty-module:~/utils/auth.client"(exports, module) {
    module.exports = {};
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/app.css
var app_default = "/build/_assets/app-DP4W76JH.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: app_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "container", children: /* @__PURE__ */ jsxDEV2("main", { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/ocorrencias._index.tsx
var ocorrencias_index_exports = {};
__export(ocorrencias_index_exports, {
  default: () => OcorrenciasLista
});
import { Link } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";

// app/components/BottomNav.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function BottomNav() {
  let wrap = {
    position: "fixed",
    // <- era sticky
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "#FCFCF8",
    WebkitBackdropFilter: "blur(6px)",
    backdropFilter: "blur(6px)",
    zIndex: 50
    // acima das ondas
  }, bar = {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid rgba(229,231,235,0.5)",
    padding: "8px 0"
  }, link = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    color: "#6b7280",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 500
  }, active = { color: "#059669", fontWeight: 700 };
  return /* @__PURE__ */ jsxDEV3("footer", { style: wrap, children: [
    /* @__PURE__ */ jsxDEV3("div", { style: bar, children: [
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/", style: ({ isActive }) => isActive ? { ...link, ...active } : link, children: [
        /* @__PURE__ */ jsxDEV3("svg", { width: "24", height: "24", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 41,
          columnNumber: 81
        }, this) }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Home" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BottomNav.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/relatar", style: ({ isActive }) => isActive ? { ...link, ...active } : link, children: [
        /* @__PURE__ */ jsxDEV3("svg", { width: "24", height: "24", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM136,120h32a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0Z" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 45,
          columnNumber: 81
        }, this) }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Relatar" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BottomNav.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/ocorrencias", style: ({ isActive }) => isActive ? { ...link, ...active } : link, children: [
        /* @__PURE__ */ jsxDEV3("svg", { width: "24", height: "24", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,192c-15.63-12.72-64-59.54-64-104a64,64,0,1,1,128,0C192,148.46,143.63,195.28,128,208Zm0-120a24,24,0,1,1-24,24A24,24,0,0,1,128,88Z" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 49,
          columnNumber: 81
        }, this) }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { children: "Ocorr\xEAncias" }, void 0, !1, {
          fileName: "app/components/BottomNav.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BottomNav.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BottomNav.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { style: { height: "env(safe-area-inset-bottom)", background: "#FCFCF8" } }, void 0, !1, {
      fileName: "app/components/BottomNav.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BottomNav.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/ocorrencias._index.tsx
var import_storage = __toESM(require_storage(), 1);
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function OcorrenciasLista() {
  let [occurrences, setOccurrences] = useState([]), [query, setQuery] = useState("");
  useEffect(() => {
    setOccurrences((0, import_storage.getOccurrences)());
  }, []);
  let filtered = useMemo(() => {
    if (!query.trim())
      return occurrences;
    let q = query.toLowerCase();
    return occurrences.filter(
      (o) => o.local.toLowerCase().includes(q) || o.crime.toLowerCase().includes(q) || o.descricao.toLowerCase().includes(q)
    );
  }, [occurrences, query]), NEUTRAL_LIGHT = "#FCFCF8", NEUTRAL_MEDIUM = "#F4F4E6", NEUTRAL_DARK = "#1c1c0d", NEUTRAL_GRAY = "#9e9d47", BRAND_GREEN = "#d1fae5", BRAND_PEACH = "#f9d6b4", page = {
    minHeight: "100svh",
    background: NEUTRAL_LIGHT,
    display: "flex",
    flexDirection: "column"
  }, main = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingBottom: "calc(96px + env(safe-area-inset-bottom))"
    // espaço pra BottomNav
  }, stickyHeader = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(6px)",
    background: "rgba(255,255,255,0.85)"
  }, headerRow = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px 10px"
  }, title = {
    flex: 1,
    textAlign: "center",
    fontWeight: 800,
    color: NEUTRAL_DARK,
    fontSize: 18
  }, searchWrap = {
    padding: "0 16px 14px"
  }, searchBox = {
    width: "100%",
    border: "none",
    outline: "none",
    background: NEUTRAL_MEDIUM,
    borderRadius: 999,
    padding: "12px 16px 12px 40px",
    fontSize: 16,
    color: NEUTRAL_DARK
  }, searchIconWrap = {
    position: "relative"
  }, searchIcon = {
    position: "absolute",
    left: 28,
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: NEUTRAL_GRAY
  }, locationBtn = {
    marginTop: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: BRAND_GREEN,
    borderRadius: 999,
    padding: "12px 16px",
    fontWeight: 700,
    color: NEUTRAL_DARK,
    border: "none"
  }, listSection = {
    padding: 16,
    display: "grid",
    gap: 16
  }, card = {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    overflow: "hidden"
  }, cardBody = {
    padding: 16
  }, cardTitle = {
    fontSize: 18,
    fontWeight: 800,
    color: NEUTRAL_DARK,
    margin: 0
  }, meta = {
    fontSize: 13,
    color: NEUTRAL_GRAY,
    marginTop: 4
  }, desc = {
    marginTop: 8,
    color: NEUTRAL_DARK,
    lineHeight: 1.5
  }, cardFooter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: `1px solid ${NEUTRAL_MEDIUM}`,
    background: "rgba(209,250,229,0.3)",
    padding: "10px 16px"
  }, boChip = {
    display: "inline-block",
    background: BRAND_PEACH,
    color: NEUTRAL_DARK,
    fontWeight: 800,
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 8
  }, commentsInfo = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: NEUTRAL_GRAY,
    fontSize: 14
  };
  return /* @__PURE__ */ jsxDEV4("div", { style: page, children: [
    /* @__PURE__ */ jsxDEV4("main", { style: main, children: [
      /* @__PURE__ */ jsxDEV4("header", { style: stickyHeader, children: [
        /* @__PURE__ */ jsxDEV4("div", { style: headerRow, children: [
          /* @__PURE__ */ jsxDEV4(
            "img",
            {
              src: "/images/LogoSemFundo.png",
              alt: "WalkSafe Logo",
              style: { height: 100, width: "auto" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 182,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("h1", { style: title, children: "Ocorr\xEAncias Recentes" }, void 0, !1, {
            fileName: "app/routes/ocorrencias._index.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias._index.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { style: searchWrap, children: [
          /* @__PURE__ */ jsxDEV4("div", { style: searchIconWrap, children: [
            /* @__PURE__ */ jsxDEV4("span", { style: searchIcon, children: /* @__PURE__ */ jsxDEV4("svg", { width: "18", height: "18", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 194,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 192,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                placeholder: "Buscar por rua, bairro ou cidade...",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                style: searchBox,
                type: "search"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 198,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias._index.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("button", { type: "button", style: locationBtn, children: [
            /* @__PURE__ */ jsxDEV4("svg", { width: "18", height: "18", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm0-144a88.1,88.1,0,0,0-88,88c0,42.28,24.32,83.2,56.78,114.83a8,8,0,0,0,11.23,1.38,8,8,0,0,0,1.38-11.23C85.59,203.46,64,159.25,64,104a64,64,0,1,1,128,0c0,55.25-21.59,99.46-45.39,123a8,8,0,0,0,12.61,10.05C187.68,211.2,216,170.28,216,104A88.1,88.1,0,0,0,128,16Z" }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 208,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("span", { children: "Usar minha localiza\xE7\xE3o atual" }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 211,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias._index.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias._index.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("section", { style: listSection, children: [
        filtered.map((occ) => {
          let href = `/ocorrencias/${encodeURIComponent(occ.id)}`, metaLine = `${new Date(occ.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })} - ${occ.local}`, boLabel = occ.numeroBo && occ.numeroBo.trim() ? `BO: ${occ.numeroBo}` : occ.hasBo ? "BO informado" : "";
          return /* @__PURE__ */ jsxDEV4("article", { style: card, children: [
            /* @__PURE__ */ jsxDEV4(Link, { to: href, style: { color: "inherit", textDecoration: "none" }, children: /* @__PURE__ */ jsxDEV4("div", { style: cardBody, children: [
              /* @__PURE__ */ jsxDEV4("h3", { style: cardTitle, children: occ.crime }, void 0, !1, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 229,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { style: meta, children: metaLine }, void 0, !1, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 230,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { style: desc, children: occ.descricao }, void 0, !1, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 228,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 227,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { style: cardFooter, children: [
              /* @__PURE__ */ jsxDEV4("div", { children: boLabel && /* @__PURE__ */ jsxDEV4("span", { style: boChip, children: boLabel }, void 0, !1, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 237,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 236,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV4("div", { style: commentsInfo, children: [
                /* @__PURE__ */ jsxDEV4("svg", { width: "16", height: "16", viewBox: "0 0 256 256", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { d: "M216,48H40A16,16,0,0,0,24,64V176a16,16,0,0,0,16,16h40v32a8,8,0,0,0,13.66,5.66L144,192h72a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM200,176H136a8,8,0,0,0-5.66,2.34L112,196.69V184a8,8,0,0,0-8-8H40V64H216l.06,112Z" }, void 0, !1, {
                  fileName: "app/routes/ocorrencias._index.tsx",
                  lineNumber: 241,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/ocorrencias._index.tsx",
                  lineNumber: 240,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("span", { children: [
                  occ.comments.length,
                  " coment\xE1rio(s)"
                ] }, void 0, !0, {
                  fileName: "app/routes/ocorrencias._index.tsx",
                  lineNumber: 243,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/ocorrencias._index.tsx",
                lineNumber: 239,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ocorrencias._index.tsx",
              lineNumber: 235,
              columnNumber: 17
            }, this)
          ] }, occ.id, !0, {
            fileName: "app/routes/ocorrencias._index.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this);
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxDEV4("p", { style: { color: NEUTRAL_GRAY }, children: "Nenhuma ocorr\xEAncia encontrada." }, void 0, !1, {
          fileName: "app/routes/ocorrencias._index.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias._index.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(BottomNav, {}, void 0, !1, {
      fileName: "app/routes/ocorrencias._index.tsx",
      lineNumber: 257,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ocorrencias._index.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}

// app/routes/ocorrencias.$id.tsx
var ocorrencias_id_exports = {};
__export(ocorrencias_id_exports, {
  default: () => OcorrenciaDetalhe,
  loader: () => loader
});
var import_auth = __toESM(require_auth(), 1), import_storage2 = __toESM(require_storage(), 1);
import { Form, useLoaderData, Link as Link2 } from "@remix-run/react";
import { useEffect as useEffect2, useMemo as useMemo2, useState as useState2 } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => ({ id: params.id ?? null });
function OcorrenciaDetalhe() {
  let { id } = useLoaderData(), [occurrence, setOccurrence] = useState2(null), [user, setUser] = useState2(null);
  useEffect2(() => {
    if (!id)
      return;
    let decodedId = decodeURIComponent(id), found = (0, import_storage2.getOccurrences)().find((o) => o.id === decodedId) || null;
    setOccurrence(found), setUser((0, import_auth.getSessionUser)());
  }, [id]);
  let handleCommentSubmit = (event) => {
    if (event.preventDefault(), !occurrence || !user || !id)
      return;
    let text = new FormData(event.currentTarget).get("comment")?.trim();
    if (!text)
      return;
    let decodedId = decodeURIComponent(id);
    (0, import_storage2.addCommentToOccurrence)(decodedId, user, text), setOccurrence(
      (prev) => prev && { ...prev, comments: [...prev.comments, { author: user, text }] }
    ), event.target.reset();
  }, colors = {
    bg: "#d1fae5",
    // verde clarinho (fundo)
    white: "#ffffff",
    text: "#1c1c0d",
    text2: "#6c6c5f",
    border: "#e9e8ce",
    brand: "#f9f506",
    brandDark: "#1c1c1c",
    boChipBg: "#dcfce7",
    boChipText: "#166534"
  }, page = {
    minHeight: "100svh",
    display: "flex",
    flexDirection: "column",
    background: colors.bg,
    color: colors.text
  }, header = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "grid",
    gridTemplateColumns: "40px 1fr 1fr 40px",
    alignItems: "center",
    gap: 8,
    background: colors.white,
    borderBottom: `1px solid ${colors.border}`,
    padding: "10px 14px"
  }, backBtn = {
    gridColumn: "1 / 2",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: 8,
    color: colors.text,
    textDecoration: "none"
  }, logoWrap = {
    gridColumn: "2 / 3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }, logo = { maxHeight: 80, width: "auto" }, headerTitle = {
    gridColumn: "3 / 4",
    justifySelf: "center",
    fontWeight: 800,
    fontSize: 16,
    color: colors.brandDark
  }, main = {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  }, card = {
    background: colors.white,
    borderRadius: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    padding: "18px 16px"
  }, title = {
    fontSize: "clamp(18px, 2.4vw, 24px)",
    fontWeight: 800,
    margin: "0 0 10px"
  }, row = {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    margin: "10px 0"
  }, rowLabel = {
    width: "25%",
    minWidth: 96,
    fontWeight: 700,
    color: colors.text
  }, rowValue = { flex: 1, color: colors.text2 }, boChip = {
    display: "inline-block",
    background: colors.boChipBg,
    color: colors.boChipText,
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 999
  }, commentsHeader = {
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
    marginBottom: 10
  }, commentItem = {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "12px 0",
    borderTop: `1px solid ${colors.border}`
  }, avatar = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#e5e7eb",
    color: colors.brandDark,
    fontSize: 14,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }, commentNameLine = {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 4
  }, commentName = { fontWeight: 800 }, commentTime = { fontSize: 12, color: colors.text2 }, footer = {
    position: "sticky",
    bottom: 0,
    zIndex: 10,
    background: colors.white,
    borderTop: `1px solid ${colors.border}`,
    padding: "10px 14px calc(12px + env(safe-area-inset-bottom))"
  }, composer = {
    display: "flex",
    gap: 10,
    alignItems: "center"
  }, textarea = {
    flex: 1,
    borderRadius: 12,
    border: "1px solid #d1d5db",
    padding: "12px 14px",
    minHeight: 40,
    resize: "none",
    outline: "none"
  }, sendBtn = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#22c55e",
    color: "#fff",
    fontWeight: 800,
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer"
  }, initials = useMemo2(() => {
    let get = (name) => name.split(/\s+/).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
    return (name) => get(name || "U");
  }, []);
  return occurrence ? /* @__PURE__ */ jsxDEV5("div", { style: page, children: [
    /* @__PURE__ */ jsxDEV5("div", { style: header, children: [
      /* @__PURE__ */ jsxDEV5(Link2, { to: "/ocorrencias", style: backBtn, "aria-label": "Voltar", children: /* @__PURE__ */ jsxDEV5("span", { style: { fontSize: 18, lineHeight: 1 }, children: "\u2190" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { style: logoWrap, children: /* @__PURE__ */ jsxDEV5("img", { src: "/images/LogoSemFundo.png", alt: "WalkSafe Logo", style: logo }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 277,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { style: headerTitle, children: "Detalhe da Ocorr\xEAncia" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 280,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", {}, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 281,
        columnNumber: 9
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { style: main, children: [
      /* @__PURE__ */ jsxDEV5("section", { style: card, children: [
        /* @__PURE__ */ jsxDEV5("h2", { style: title, children: occurrence.crime === "Roubo" ? "Roubo de celular" : occurrence.crime }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 288,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("div", { style: row, children: [
            /* @__PURE__ */ jsxDEV5("div", { style: rowLabel, children: "Crime" }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 294,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { style: rowValue, children: occurrence.crime }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 295,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { style: row, children: [
            /* @__PURE__ */ jsxDEV5("div", { style: rowLabel, children: "Local" }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 298,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { style: rowValue, children: occurrence.local }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 299,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { style: row, children: [
            /* @__PURE__ */ jsxDEV5("div", { style: rowLabel, children: "Data" }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 302,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { style: rowValue, children: new Date(occurrence.data).toLocaleString("pt-BR", {
              timeZone: "UTC"
            }) }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 303,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 301,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { style: row, children: [
            /* @__PURE__ */ jsxDEV5("div", { style: rowLabel, children: "Descri\xE7\xE3o" }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { style: rowValue, children: occurrence.descricao }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 311,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 309,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        occurrence.numeroBo && /* @__PURE__ */ jsxDEV5("div", { style: { marginTop: 12 }, children: /* @__PURE__ */ jsxDEV5("span", { style: boChip, children: [
          "BO: ",
          occurrence.numeroBo
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 317,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 316,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("section", { style: card, children: [
        /* @__PURE__ */ jsxDEV5("h3", { style: commentsHeader, children: "Coment\xE1rios" }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 324,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          occurrence.comments.length === 0 && /* @__PURE__ */ jsxDEV5("p", { style: { color: colors.text2, marginTop: 8 }, children: "Ainda n\xE3o h\xE1 coment\xE1rios." }, void 0, !1, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          occurrence.comments.map((c, i) => /* @__PURE__ */ jsxDEV5("div", { style: commentItem, children: [
            /* @__PURE__ */ jsxDEV5("div", { style: avatar, children: initials(c.author) }, void 0, !1, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 336,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ jsxDEV5("div", { style: commentNameLine, children: [
                /* @__PURE__ */ jsxDEV5("span", { style: commentName, children: c.author }, void 0, !1, {
                  fileName: "app/routes/ocorrencias.$id.tsx",
                  lineNumber: 339,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV5("span", { style: commentTime, children: i === 0 ? "2h atr\xE1s" : "1h atr\xE1s" }, void 0, !1, {
                  fileName: "app/routes/ocorrencias.$id.tsx",
                  lineNumber: 341,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/ocorrencias.$id.tsx",
                lineNumber: 338,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { style: { color: colors.text2, fontSize: 14 }, children: c.text }, void 0, !1, {
                fileName: "app/routes/ocorrencias.$id.tsx",
                lineNumber: 343,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/ocorrencias.$id.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, this)
          ] }, i, !0, {
            fileName: "app/routes/ocorrencias.$id.tsx",
            lineNumber: 335,
            columnNumber: 15
          }, this))
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 327,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 285,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("footer", { style: footer, children: /* @__PURE__ */ jsxDEV5(Form, { method: "post", onSubmit: handleCommentSubmit, style: composer, children: [
      /* @__PURE__ */ jsxDEV5(
        "textarea",
        {
          name: "comment",
          placeholder: user ? "Adicionar coment\xE1rio..." : "Fa\xE7a login para comentar",
          disabled: !user,
          rows: 1,
          style: textarea
        },
        void 0,
        !1,
        {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 354,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5("button", { type: "submit", style: sendBtn, disabled: !user, children: [
        /* @__PURE__ */ jsxDEV5("span", { children: "Enviar" }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("svg", { width: "18", height: "18", viewBox: "0 0 256 256", fill: "currentColor", "aria-hidden": !0, children: /* @__PURE__ */ jsxDEV5("path", { d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 364,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 361,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ocorrencias.$id.tsx",
    lineNumber: 268,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV5("div", { style: page, children: [
    /* @__PURE__ */ jsxDEV5("div", { style: header, children: [
      /* @__PURE__ */ jsxDEV5(Link2, { to: "/ocorrencias", style: backBtn, "aria-label": "Voltar", children: "\u2190" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { style: logoWrap, children: /* @__PURE__ */ jsxDEV5("img", { src: "/images/LogoSemFundo.png", alt: "WalkSafe Logo", style: logo }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 253,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { style: headerTitle, children: "Detalhe da Ocorr\xEAncia" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 248,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { style: main, children: /* @__PURE__ */ jsxDEV5("div", { style: card, children: /* @__PURE__ */ jsxDEV5("p", { style: { margin: 0 }, children: "Ocorr\xEAncia n\xE3o encontrada." }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 260,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 259,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 258,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ocorrencias.$id.tsx",
    lineNumber: 247,
    columnNumber: 7
  }, this);
}

// app/routes/relatar.tsx
var relatar_exports = {};
__export(relatar_exports, {
  default: () => RelatarOcorrencia
});
var import_auth2 = __toESM(require_auth(), 1), import_storage3 = __toESM(require_storage(), 1);
import { Form as Form2, useNavigate } from "@remix-run/react";
import { useEffect as useEffect3, useState as useState3 } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var crimeOptions = ["Roubo", "Furto", "Ass\xE9dio", "Agress\xE3o", "Outro"];
function RelatarOcorrencia() {
  let navigate = useNavigate(), [form, setForm] = useState3({
    local: "",
    data: "",
    crime: "",
    descricao: "",
    numeroBo: ""
  }), [errors, setErrors] = useState3([]);
  useEffect3(() => {
    (0, import_auth2.getSessionUser)() || navigate("/login?redirectTo=/relatar");
  }, [navigate]);
  let brandBg = "#F3F6F4", panelBg = "#FCFCF8", brandText = "#1c1c1c", brandMuted = "#6b7280", brandMint = "#E6FFF4", brandBlack = "#1c1c1c", page = {
    minHeight: "100svh",
    background: brandBg,
    color: brandText,
    display: "flex",
    flexDirection: "column"
  }, container = {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // padding lateral responsivo + espaço para a BottomNav fixa
    padding: "20px clamp(12px, 4vw, 28px) calc(120px + env(safe-area-inset-bottom))",
    boxSizing: "border-box"
  }, panel = {
    background: panelBg,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    padding: "clamp(16px, 3vw, 28px)",
    display: "flex",
    flexDirection: "column",
    flex: 1
    // 🔑 o painel ocupa a altura restante
  }, headerRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 6,
    marginLeft: 40
  }, logo = { height: 140, width: "auto" }, h1 = {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: 800,
    margin: "8px 0 18px"
  }, formCol = {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    flex: 1
  }, label = { fontSize: 14, fontWeight: 600, marginBottom: 6 }, inputBase = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid #D1D5DB",
    background: "#fff",
    fontSize: 16,
    boxSizing: "border-box"
  }, select = {
    ...inputBase,
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage: "linear-gradient(45deg, transparent 50%, #9CA3AF 50%), linear-gradient(135deg, #9CA3AF 50%, transparent 50%)",
    backgroundPosition: "calc(100% - 24px) 18px, calc(100% - 18px) 18px",
    backgroundSize: "6px 6px, 6px 6px",
    backgroundRepeat: "no-repeat"
  }, textarea = {
    ...inputBase,
    minHeight: 140,
    resize: "vertical",
    flex: 1
    // 🔑 ajuda a “encher” a tela em monitores altos
  }, btnPrimary = {
    alignSelf: "stretch",
    background: brandBlack,
    color: "#fff",
    padding: "14px 18px",
    borderRadius: 12,
    fontWeight: 800,
    border: "none",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    cursor: "pointer",
    fontSize: 16
  }, infoBox = {
    marginTop: 18,
    background: brandMint,
    borderRadius: 12,
    padding: "14px 16px",
    lineHeight: 1.5
  }, errorBox = {
    background: "#FEE2E2",
    color: "#991B1B",
    padding: "10px 14px",
    borderRadius: 12,
    margin: "8px 0 12px"
  }, validate = (d) => {
    let errs = [];
    return (!d.local || d.local.trim().length < 3) && errs.push("\u{1F4CD} Informe o local."), d.data || errs.push("\u{1F4C5} Informe a data e hora."), crimeOptions.includes(d.crime) || errs.push("\u{1F6A8} Selecione o tipo de crime."), (!d.descricao || d.descricao.trim().length < 10) && errs.push("\u{1F4DD} Descreva melhor o que aconteceu."), d.numeroBo && !/^\d{4}-\d{6}-\d{2}$/.test(d.numeroBo.trim()) && errs.push("\u{1F4CE} N\xBA do BO deve ser YYYY-######-## (ex: 2025-000123-01)."), errs;
  }, handleChange = (e) => {
    let { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }, handleSubmit = (e) => {
    e.preventDefault();
    let fieldErrors = validate(form);
    if (fieldErrors.length)
      return setErrors(fieldErrors);
    setErrors([]);
    let dateOnly = form.data.slice(0, 10), payload = {
      local: form.local,
      data: dateOnly,
      crime: form.crime,
      descricao: form.descricao,
      hasBo: Boolean(form.numeroBo && form.numeroBo.trim()),
      numeroBo: form.numeroBo?.trim() || void 0
    }, created = (0, import_storage3.saveOccurrence)(payload);
    created && navigate(`/ocorrencias/${encodeURIComponent(created.id)}`);
  };
  return /* @__PURE__ */ jsxDEV6("div", { style: page, children: [
    /* @__PURE__ */ jsxDEV6("div", { style: container, children: /* @__PURE__ */ jsxDEV6("div", { style: panel, children: [
      /* @__PURE__ */ jsxDEV6("div", { style: headerRow, children: /* @__PURE__ */ jsxDEV6("img", { src: "/images/LogoSemFundo.png", alt: "WalkSafe Logo", style: logo }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("h1", { style: h1, children: "Relatar Ocorr\xEAncia" }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      errors.length > 0 && /* @__PURE__ */ jsxDEV6("div", { style: errorBox, children: /* @__PURE__ */ jsxDEV6("ul", { style: { margin: 0, paddingLeft: 18 }, children: errors.map((err, i) => /* @__PURE__ */ jsxDEV6("li", { children: err }, i, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 209,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 207,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6(Form2, { onSubmit: handleSubmit, style: formCol, children: [
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "local", style: label, children: "Local" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              id: "local",
              name: "local",
              type: "text",
              placeholder: "Digite o endere\xE7o ou aproxime",
              value: form.local,
              onChange: handleChange,
              required: !0,
              style: inputBase
            },
            void 0,
            !1,
            {
              fileName: "app/routes/relatar.tsx",
              lineNumber: 218,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "data", style: label, children: "Data e Hora" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              id: "data",
              name: "data",
              type: "datetime-local",
              value: form.data,
              onChange: handleChange,
              required: !0,
              style: inputBase
            },
            void 0,
            !1,
            {
              fileName: "app/routes/relatar.tsx",
              lineNumber: 228,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "crime", style: label, children: "Tipo de crime" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "select",
            {
              id: "crime",
              name: "crime",
              value: form.crime,
              onChange: handleChange,
              required: !0,
              style: select,
              children: [
                /* @__PURE__ */ jsxDEV6("option", { value: "", children: "Selecione o tipo de crime" }, void 0, !1, {
                  fileName: "app/routes/relatar.tsx",
                  lineNumber: 241,
                  columnNumber: 17
                }, this),
                crimeOptions.map((c) => /* @__PURE__ */ jsxDEV6("option", { value: c, children: c }, c, !1, {
                  fileName: "app/routes/relatar.tsx",
                  lineNumber: 243,
                  columnNumber: 19
                }, this))
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/relatar.tsx",
              lineNumber: 237,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { style: { display: "flex", flexDirection: "column", flex: 1 }, children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "descricao", style: label, children: "Descri\xE7\xE3o" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "textarea",
            {
              id: "descricao",
              name: "descricao",
              placeholder: "Descreva com detalhes o que aconteceu",
              value: form.descricao,
              onChange: handleChange,
              required: !0,
              style: textarea
            },
            void 0,
            !1,
            {
              fileName: "app/routes/relatar.tsx",
              lineNumber: 250,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("label", { htmlFor: "numeroBo", style: label, children: "Boletim de Ocorr\xEAncia (BO)" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "input",
            {
              id: "numeroBo",
              name: "numeroBo",
              type: "text",
              placeholder: "N\xBA do protocolo (opcional)",
              value: form.numeroBo,
              onChange: handleChange,
              style: inputBase
            },
            void 0,
            !1,
            {
              fileName: "app/routes/relatar.tsx",
              lineNumber: 260,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("button", { type: "submit", style: btnPrimary, children: "Enviar relato" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { style: infoBox, children: [
        /* @__PURE__ */ jsxDEV6("strong", { style: { display: "block", marginBottom: 6 }, children: "A import\xE2ncia do B.O." }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { style: { margin: 0, color: brandMuted }, children: "Registrar um Boletim de Ocorr\xEAncia \xE9 fundamental. Ele oficializa o crime, permitindo que a pol\xEDcia investigue e ajuda a mapear \xE1reas de risco, contribuindo para a seguran\xE7a de todos." }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 271,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(BottomNav, {}, void 0, !1, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 282,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/relatar.tsx",
    lineNumber: 194,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
import { redirect } from "@remix-run/node";
var action = async ({ request }) => redirect("/");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Index() {
  let brandGreen = "#d1fae5", brandBlack = "#1c1c1c", brandWhite = "#ffffff";
  return /* @__PURE__ */ jsxDEV7("section", { style: {
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    width: "100vw",
    minHeight: "100svh",
    background: brandGreen,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxDEV7("main", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      // ocupa toda a altura menos a bottom-nav
      flex: 1,
      justifyContent: "center",
      padding: "clamp(24px, 6vh, 64px) 16px",
      zIndex: 10
    }, children: [
      /* @__PURE__ */ jsxDEV7("div", { style: {
        background: brandWhite,
        padding: 0,
        borderRadius: 16,
        boxShadow: "0 10px 20px rgba(0,0,0,0.10)",
        transform: "rotate(-3deg)"
      }, children: /* @__PURE__ */ jsxDEV7(
        "img",
        {
          src: "/images/LogoSemFundo.png",
          alt: "WalkSafe Logo",
          style: {
            maxHeight: "clamp(72px, 12vw, 140px)",
            width: "auto",
            display: "block"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 86,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { style: {
        marginTop: "clamp(16px, 3vh, 32px)",
        background: brandWhite,
        padding: "clamp(12px, 2vh, 20px) clamp(12px, 3vw, 20px)",
        borderRadius: 16,
        boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
        width: "min(92vw, 420px)",
        fontSize: "clamp(14px, 2.6vw, 18px)",
        fontWeight: 600,
        color: brandBlack
      }, children: /* @__PURE__ */ jsxDEV7("p", { style: { margin: 0 }, children: "Uma cidade mais segura come\xE7a com voc\xEA!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Link3, { to: "/relatar", style: {
        marginTop: "clamp(16px, 3vh, 24px)",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        background: brandBlack,
        color: "#fff",
        padding: "clamp(10px, 2.2vh, 14px) clamp(16px, 4vw, 22px)",
        borderRadius: 12,
        fontWeight: 800,
        textDecoration: "none",
        boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
        fontSize: "clamp(14px, 2.8vw, 16px)"
      }, children: [
        /* @__PURE__ */ jsxDEV7("span", { children: "Relatar Ocorr\xEAncia" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("svg", { width: "24", height: "24", viewBox: "0 0 24 24", stroke: "currentColor", fill: "none", "aria-hidden": !0, children: /* @__PURE__ */ jsxDEV7("path", { d: "M13 7l5 5-5 5M6 12h12", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "28vh",
          minHeight: 140,
          maxHeight: 220,
          zIndex: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxDEV7("style", { children: `
          @keyframes wave-green { 0% { transform: translateX(-50%) rotate(0deg); } 100% { transform: translateX(-50%) rotate(360deg); } }
          @keyframes wave-black { 0% { transform: translateX(-50%) rotate(0deg); } 100% { transform: translateX(-50%) rotate(-360deg); } }
        ` }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV7(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                width: "200%",
                height: "200%",
                borderRadius: "45%",
                background: "rgba(28,28,28,0.6)",
                bottom: "-105%",
                transform: "translateX(-50%)",
                animation: "wave-black 10s linear infinite"
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                width: "200%",
                height: "200%",
                borderRadius: "45%",
                background: "rgba(209,250,229,0.6)",
                bottom: "-100%",
                transform: "translateX(-50%)",
                animation: "wave-green 8s linear infinite"
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 138,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(BottomNav, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_auth3 = __toESM(require_auth(), 1);
import { Form as Form3, useNavigation, useSearchParams } from "@remix-run/react";
import { useNavigate as useNavigate2 } from "react-router-dom";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function action2({ request }) {
  return null;
}
function Login() {
  let [searchParams] = useSearchParams(), redirectTo = searchParams.get("redirectTo") || "/", navigation = useNavigation(), navigate = useNavigate2(), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV8("div", { className: "form-container", style: { marginTop: "2rem" }, children: [
    /* @__PURE__ */ jsxDEV8("h2", { children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { children: "Para relatar uma ocorr\xEAncia, por favor, fa\xE7a o login. (Qualquer nome de usu\xE1rio \xE9 v\xE1lido)." }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(Form3, { onSubmit: (event) => {
      event.preventDefault();
      let username = new FormData(event.currentTarget).get("username");
      username && ((0, import_auth3.createSession)(username), navigate(redirectTo));
    }, method: "post", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV8("label", { htmlFor: "username", children: "Nome de usu\xE1rio" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("input", { type: "text", id: "username", name: "username", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("button", { type: "submit", className: "btn btn-primary", disabled: isSubmitting, children: isSubmitting ? "Entrando..." : "Entrar" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VKJPPSZD.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-FBPO4KJ3.js", "/build/_shared/chunk-PJSLJYSE.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-D3YB6TPY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Q4GP324V.js", imports: ["/build/_shared/chunk-6GD5OBS7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-24TQ3OIE.js", imports: ["/build/_shared/chunk-TC4XHIQS.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ocorrencias.$id": { id: "routes/ocorrencias.$id", parentId: "root", path: "ocorrencias/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/ocorrencias.$id-EM6DTQS2.js", imports: ["/build/_shared/chunk-UHKHII4F.js", "/build/_shared/chunk-TC4XHIQS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ocorrencias._index": { id: "routes/ocorrencias._index", parentId: "root", path: "ocorrencias", index: !0, caseSensitive: void 0, module: "/build/routes/ocorrencias._index-STDRV5VN.js", imports: ["/build/_shared/chunk-UHKHII4F.js", "/build/_shared/chunk-6GD5OBS7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/relatar": { id: "routes/relatar", parentId: "root", path: "relatar", index: void 0, caseSensitive: void 0, module: "/build/routes/relatar-BZ7NF44O.js", imports: ["/build/_shared/chunk-UHKHII4F.js", "/build/_shared/chunk-6GD5OBS7.js", "/build/_shared/chunk-TC4XHIQS.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ec3e0ffa", hmr: { runtime: "/build/_shared\\chunk-PJSLJYSE.js", timestamp: 1755451619553 }, url: "/build/manifest-EC3E0FFA.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ocorrencias._index": {
    id: "routes/ocorrencias._index",
    parentId: "root",
    path: "ocorrencias",
    index: !0,
    caseSensitive: void 0,
    module: ocorrencias_index_exports
  },
  "routes/ocorrencias.$id": {
    id: "routes/ocorrencias.$id",
    parentId: "root",
    path: "ocorrencias/:id",
    index: void 0,
    caseSensitive: void 0,
    module: ocorrencias_id_exports
  },
  "routes/relatar": {
    id: "routes/relatar",
    parentId: "root",
    path: "relatar",
    index: void 0,
    caseSensitive: void 0,
    module: relatar_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
