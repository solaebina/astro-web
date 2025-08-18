# Adding New Thoughts

This directory contains your thought entries. To add a new thought:

## Quick Start

1. **Copy the template**: Copy `src/content/thoughts/_template.md` and rename it with a descriptive filename
2. **Fill in the frontmatter**:
   - `title`: A brief, descriptive title
   - `date`: Use YYYY-MM-DD format
   - `tags`: Add relevant tags (optional)
   - `draft: true` if you want to hide it temporarily
3. **Write your thoughts**: Use the template structure or write freely
4. **Save the file**: The thought will automatically appear on your thoughts page

## File Naming Convention

Use a descriptive filename with a number prefix for ordering:
- `01-first-thought.md`
- `02-ai-ethics.md`
- `03-creative-process.md`

## Frontmatter Options

```yaml
---
title: "Your Title"
date: 2024-03-18
tags: ["AI", "ethics", "experiment"]
draft: false  # Set to true to hide from public view
---
```

## Content Tips

- **Keep it raw**: Don't worry about polish
- **Use markdown**: Headers, lists, links, etc.
- **Add structure**: Use headers to organize your thinking
- **Include questions**: What are you trying to figure out?
- **Tag everything**: Makes it easier to find related thoughts later

## Example Structure

```markdown
## What I'm thinking about
Brief description of the thought

## Key Ideas
- Point 1
- Point 2

## Questions
- What am I missing?
- Where should this lead?

## Next Steps
What do I want to explore next?
```

## Benefits of This System

✅ **Easy to add**: Just create a markdown file  
✅ **Organized**: Automatic sorting by date  
✅ **Searchable**: Tags help find related thoughts  
✅ **Version controlled**: Git tracks your thinking over time  
✅ **Flexible**: Use any markdown formatting you want  
✅ **Draft support**: Hide thoughts while they're developing  

Happy thinking! 🧠
