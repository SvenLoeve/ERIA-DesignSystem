---
layout: default.njk
title: Methodology
description: Methodology of the Eria Design System	
mermaid: true
---

# Methodology

This design system is created using the atomic design methodology. Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are:

- Atoms
- Molecules
- Organisms
- Templates
- Pages

# When to add a new component

When you are creating a new component (or anything for that matter), you can use the following flowchart:

```mermaid 
flowchart TD
	Idea("New Design or Idea")
	Exists{"Already exists"}
	Fulfill("Does it fulfill all requirements?")
	Amendable("Can it be amended to suit new requirements while fulfilling existing ones?")
	Propose("Propose amendment to existing template")
	NotExists{"Does not already exist"}
	Similar("Does something similar already exist?")
	Concept("Prototype a concept that can be reused across more than one Product")
	Generic("Can you make it more generic?")
	Add("Add to product directly")
	ProposeNew{"Propose/Add to Design System"}
	Idea-->Exists
	Exists-->|"Yes"|Fulfill
	Fulfill-->|"Yes"|Amendable
	Amendable-->|"Yes"|Propose
	Fulfill-->|"No"|NotExists
	Exists-->|"No"|Similar
	Similar-->|"Yes"|Fulfill
	Similar-->|"No"|NotExists
	Amendable-->|"No"|NotExists
	NotExists-->Generic
	Generic-->|"No"|Add
	Generic-->|"Yes"|Concept
	Concept-->ProposeNew
```

# Sources
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
