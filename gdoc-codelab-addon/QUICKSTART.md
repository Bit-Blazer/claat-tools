# Quick Start Guide

Get started with the Codelab Format Guide Tools add-on in 5 minutes.

## Installation

### For Authors (Manual Installation)

1. **Open your Google Doc**

2. **Open Apps Script**

   - Menu: `Extensions` > `Apps Script`

3. **Clear default code**

   - Select all in `Code.gs` and delete

4. **Add the files**

   Create these files (File > New > Script file or HTML file):

   - `Code.gs` - Copy from [Code.gs](Code.gs)
   - `ColorPalette.gs` - Copy from [ColorPalette.gs](ColorPalette.gs)
   - `Formatting.gs` - Copy from [Formatting.gs](Formatting.gs)
   - `Detection.gs` - Copy from [Detection.gs](Detection.gs)
   - `Validation.gs` - Copy from [Validation.gs](Validation.gs)
   - `Sidebar.html` - Copy from [Sidebar.html](Sidebar.html)

5. **Update manifest**

   - Click the gear icon ⚙️ next to "Project Settings"
   - Enable "Show appsscript.json"
   - Replace content with [appsscript.json](appsscript.json)

6. **Save everything**

   - Click 💾 Save
   - Close Apps Script editor

7. **Refresh your doc**

   - Reload the Google Doc page
   - Look for `Extensions` > `Codelab Format Guide Tools`

8. **Authorize**
   - First run will ask for permissions
   - Review and authorize

## First Use

### 1. Open the Sidebar

`Extensions` > `Codelab Format Guide Tools` > `Open Format Tools`

### 2. Add Metadata Table

Click **"Headings & Structure"** > **"Metadata Table"**

Fill in:

```
Summary     | Your codelab description
URL         | your-codelab-name
Category    | Web
Environment | Web
Status      | Draft
Feedback    | https://github.com/yourrepo/issues
```

### 3. Add Your First Step

Click 📝 **"Step"** quick action

- This creates an H1 heading
- Type your step title
- Press Enter

### 4. Add Duration

After your step title:

- Click **"Duration Annotation"**
- It inserts: `Duration: 5:00`
- Edit the time as needed

### 5. Add Content

#### Add a tip (positive infobox):

- Click ✅ **"Tip"** quick action
- Type your tip text

#### Add code:

- Click 💻 **"Code"** quick action
- Paste your code
- Add an H3 above with filename (optional)

#### Add a warning:

- Click ⚠️ **"Warning"** quick action
- Type your warning text

### 6. Validate

Click **"Validate Document"** button at bottom

Check for:

- ✅ All required fields
- ✅ Proper formatting
- ⚠️ Warnings to fix

## Common Workflows

### Create a Code Block with Filename

1. Insert H3 heading: `app.js`
2. Click **"Code Block"**
3. Paste your code
4. (Optional) Make H3 a link to GitHub file

### Add Multiple Steps

For each step:

1. Click 📝 **"Step"**
2. Type step title
3. Add **"Duration Annotation"**
4. Add content
5. Repeat

### Format Existing Text

1. **Select** the text
2. Choose format from sidebar:
   - \`⌘\` **Inline Code** for variables
   - **Download Button** for download links

### Insert YouTube Video

1. Insert an image (any image, it's just a placeholder)
2. Right-click image > **"Alt text"**
3. In **Description**, paste: `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`
4. Done! Will show as video after export

## Keyboard Shortcuts (via Menu)

Set up custom shortcuts in Google Docs:

- `Extensions` > `Codelab Format Guide Tools` > `Quick Actions` > ...

Suggested mappings:

- `Ctrl+Alt+1` - Insert Step
- `Ctrl+Alt+2` - Insert Section
- `Ctrl+Alt+C` - Code Block
- `Ctrl+Alt+I` - Inline Code

## Export Your Codelab

1. **Publish your doc**

   - Share > Anyone with link can view
   - Copy the document URL

2. **Install claat** (if not done)

   ```bash
   # Download from releases
   # Or build from source
   ```

3. **Export**

   ```bash
   claat export YOUR_GOOGLE_DOC_URL
   ```

4. **Preview**
   ```bash
   claat serve
   # Open http://localhost:9090
   ```

## Tips & Tricks

### Search Formats

Type in the search box to filter formats:

- "code" - Shows all code-related options
- "info" - Shows infoboxes
- "heading" - Shows heading options

### Context Awareness

The sidebar shows what's relevant:

- **Selection**: Shows inline formats
- **Cursor in table**: Shows table options
- **Empty paragraph**: Shows block inserts

### Batch Operations

- Select multiple paragraphs
- Apply format to all at once

### Color Precision

Always use the add-on buttons instead of manual colors:

- ✅ Add-on: Exact hex values
- ❌ Manual: Might be slightly off

### Validation Reports

- Run validation after major changes
- Fix errors before warnings
- Export only when validation passes

## Next Steps

- Read the full [README.md](README.md)
- Check [Format Guide](../OLD_GDOC_FORMAT_GUIDE.md)
- Browse [sample codelabs](../sample-codelabs/)
- Join [codelab-authors group](https://groups.google.com/g/codelab-authors)

## Need Help?

- **Add-on issues**: Check sidebar help icon ⓘ
- **Format questions**: See format guide
- **Export issues**: Check claat documentation
- **Bugs**: Report on GitHub Issues

---

Happy codelab authoring! 🎉
