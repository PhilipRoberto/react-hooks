import { Link } from "react-router-dom";

const navigation = [
  {
    title: "useState",
    href: "useState",
  },
  {
    title: "useEffect",
    href: "useEffect",
  },
  {
    title: "useMemo",
    href: "useMemo",
  },
  {
    title: "useRef",
    href: "useRef",
  },
  {
    title: "useContext",
    href: "useContext",
  },
  {
    title: "useReducer",
    href: "useReducer",
  },
  {
    title: "useCallback",
    href: "useCallback",
  },
  {
    title: "customHook",
    href: "customHook"
  },
  {
    title: "useLayoutEffect",
    href: "useLayoutEffect",
  }
];

export default function Nav() {
  return (
    <nav className="nav">
      {navigation.map((nav) => {
        return (
          <Link key={nav.title} to={nav.href}>
            {nav.title}
          </Link>
        );
      })}
    </nav>
  );
}
