"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/resources?tab=blogs" },
      { label: "News", href: "/resources?tab=news" },
      { label: "Research", href: "/resources?tab=research" },
      { label: "Recipes", href: "/resources?tab=recipes" },
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact a Specialist",
    href: "/doctors",
  },
  {
    label: "Urdu Guides",
    href: "/urdu-guides",
    children: [
      {
        label: "Five Ways to Move More",
        href: "/urdu-guides/five-ways-to-move-more",
      },
      { label: "Enjoy Food", href: "/urdu-guides/enjoy-food" },
    ],
  },
  {
    label: "Daily Care and Monitoring",
    href: "/daily-care-and-monitoring",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Resources",
    "Urdu Guides",
  ]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isOpen } = useSidebar();

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string, item: NavItem) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.includes("?")) {
      const [path, query] = href.split("?");
      const params = new URLSearchParams(query);
      const tabParam = params.get("tab");

      if (pathname === path && tabParam) {
        return searchParams.get("tab") === tabParam;
      }
      return false;
    }

    if (item.children && item.children.length > 0) {
      const isChildActive = item.children.some((child) => {
        if (child.href.includes("?")) {
          const [path, query] = child.href.split("?");
          const params = new URLSearchParams(query);
          const tabParam = params.get("tab");
          return pathname === path && searchParams.get("tab") === tabParam;
        }
        return pathname === child.href;
      });
      if (isChildActive) {
        return false;
      }
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  const renderNavItem = (item: NavItem, depth: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const active = isActive(item.href, item);

    return (
      <div key={item.href}>
        <div
          className={`flex items-center py-1.5 px-2 text-sm rounded cursor-pointer transition-colors ${
            active
              ? "bg-primary text-white font-medium"
              : "text-gray-700 hover:bg-gray-50"
          }`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleExpanded(item.label);
              }}
              aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
              className="mr-1 p-0.5"
            >
              {isExpanded ? (
                <ChevronDown
                  className={`w-3.5 h-3.5 ${
                    active ? "text-white" : "text-gray-500"
                  }`}
                />
              ) : (
                <ChevronRight
                  className={`w-3.5 h-3.5 ${
                    active ? "text-white" : "text-gray-500"
                  }`}
                />
              )}
            </button>
          )}
          <Link href={item.href} className="flex-1 truncate">
            {item.label}
          </Link>
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-0.5">
            {item.children!.map((child) => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`hidden lg:block sticky top-[5.5rem] h-[calc(100vh-5.5rem)] bg-gray-50 border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out ${
        isOpen ? "w-[16.25rem]" : "w-0"
      }`}
      style={{
        borderRightWidth: isOpen ? "1px" : "0px",
      }}
    >
      <div className={`py-4 px-2 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <nav className="space-y-0.5">
          {navigationItems.map((item) => renderNavItem(item))}
        </nav>
      </div>
    </aside>
  );
}
