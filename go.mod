module github.com/HugoBlox/hugo-blox-builder/starters/academic-cv

go 1.19

require (
	github.com/HugoBlox/hugo-blox-builder/modules/blox-plugin-netlify v1.1.2
	github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind v0.9.0
)

replace github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind       => ./hugo-blox-builder-main/modules/blox-tailwind
replace github.com/HugoBlox/hugo-blox-builder/modules/blox-plugin-netlify  => ./hugo-blox-builder-main/modules/blox-plugin-netlify
replace github.com/HugoBlox/hugo-blox-builder/modules/blox-analytics => ./hugo-blox-builder-main/modules/blox-analytics