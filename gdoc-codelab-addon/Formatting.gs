/**
 * Core formatting functions for codelab authoring.
 * All functions apply claat-compliant formatting to Google Docs.
 */

/**
 * Apply meta annotation color (Duration, Environment)
 * @param {string} text - The text to format (e.g., "Duration: 5:00")
 */
function applyMetaAnnotation(text) {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  
  if (!selection) {
    insertMetaText(text);
    return;
  }
  
  const elements = selection.getRangeElements();
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i].getElement().asText();
    element.setForegroundColor(META_COLOR);
    element.setBold(false);
    element.setItalic(false);
  }
}

/**
 * Insert meta annotation text at cursor
 */
function insertMetaText(text) {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();
  
  if (!cursor) {
    showAlert('Please place your cursor where you want to insert the annotation.');
    return;
  }
  
  const element = cursor.insertText(text);
  element.setForegroundColor(META_COLOR);
}

/**
 * Create a single-cell table for infobox, code, or survey
 * @param {string} type - 'positive', 'negative', 'code', 'console', 'survey'
 * @param {string} content - Initial content for the cell
 */
function createSingleCellTable(type, content = '') {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();
  
  if (!cursor) {
    showAlert('Please place your cursor where you want to insert the block.');
    return null;
  }
  
  const position = cursor.getElement();
  const parent = position.getParent();
  
  // Find the body or appropriate container
  let body = doc.getBody();
  let insertIndex;
  
  if (parent.getType() === DocumentApp.ElementType.BODY_SECTION) {
    insertIndex = body.getChildIndex(position);
  } else {
    // Try to find the parent paragraph
    let currentParent = parent;
    while (currentParent && currentParent.getType() !== DocumentApp.ElementType.BODY_SECTION) {
      const tempParent = currentParent.getParent();
      if (tempParent && tempParent.getType() === DocumentApp.ElementType.BODY_SECTION) {
        insertIndex = body.getChildIndex(currentParent);
        break;
      }
      currentParent = tempParent;
    }
  }
  
  // Create table
  const table = body.insertTable(insertIndex + 1);
  const row = table.appendTableRow();
  const cell = row.appendTableCell(content);
  
  // Apply formatting based on type
  switch (type) {
    case 'positive':
      cell.setBackgroundColor(INFOBOX_POSITIVE);
      cell.editAsText().setFontFamily('Arial');
      break;
      
    case 'negative':
      cell.setBackgroundColor(INFOBOX_NEGATIVE);
      cell.editAsText().setFontFamily('Arial');
      break;
      
    case 'code':
      cell.setBackgroundColor('#ffffff');
      cell.editAsText().setFontFamily(FONT_CODE);
      break;
      
    case 'console':
      cell.setBackgroundColor('#ffffff');
      cell.editAsText().setFontFamily(FONT_CONSOLE);
      break;
      
    case 'survey':
      cell.setBackgroundColor(SURVEY_COLOR);
      cell.editAsText().setFontFamily('Arial');
      break;
  }
  
  // Set padding
  cell.setPaddingTop(8);
  cell.setPaddingBottom(8);
  cell.setPaddingLeft(8);
  cell.setPaddingRight(8);
  
  return table;
}

/**
 * Create positive infobox (green background)
 */
function createPositiveInfobox() {
  const table = createSingleCellTable('positive', 'Add your note here...');
  if (table) {
    showToast('Positive infobox created', 'Use for tips and best practices');
  }
}

/**
 * Create negative infobox (orange background)
 */
function createNegativeInfobox() {
  const table = createSingleCellTable('negative', 'Add your warning here...');
  if (table) {
    showToast('Negative infobox created', 'Use for warnings and restrictions');
  }
}

/**
 * Create code block (Courier New font)
 */
function createCodeBlock() {
  const table = createSingleCellTable('code', '// Your code here');
  if (table) {
    showToast('Code block created', 'Add a Heading 3 above with the filename');
  }
}

/**
 * Create console/terminal block (Consolas font)
 */
function createConsoleBlock() {
  const table = createSingleCellTable('console', '$ your command here');
  if (table) {
    showToast('Console block created', 'For terminal commands and output');
  }
}

/**
 * Create survey block (blue background)
 */
function createSurveyBlock() {
  const table = createSingleCellTable('survey', '');
  if (table) {
    const cell = table.getRow(0).getCell(0);
    
    // Add H4 question
    const question = cell.appendParagraph('Your survey question?');
    question.setHeading(DocumentApp.ParagraphHeading.HEADING4);
    
    // Add bullet list
    const list = cell.appendListItem('Option 1');
    list.setGlyphType(DocumentApp.GlyphType.BULLET);
    cell.appendListItem('Option 2').setGlyphType(DocumentApp.GlyphType.BULLET);
    cell.appendListItem('Option 3').setGlyphType(DocumentApp.GlyphType.BULLET);
    
    showToast('Survey block created', 'Customize question and options');
  }
}

/**
 * Apply inline code formatting (Courier New)
 */
function applyInlineCode() {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  
  if (!selection) {
    showAlert('Please select text to format as inline code.');
    return;
  }
  
  const elements = selection.getRangeElements();
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i].getElement();
    if (element.getType() === DocumentApp.ElementType.TEXT) {
      const text = element.asText();
      text.setFontFamily(FONT_CODE);
    }
  }
  
  showToast('Inline code applied', 'Formatted with Courier New');
}

/**
 * Create download button (green background link)
 */
function createDownloadButton() {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  
  if (!selection) {
    showAlert('Please select text to convert to a download button.');
    return;
  }
  
  const elements = selection.getRangeElements();
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i].getElement();
    if (element.getType() === DocumentApp.ElementType.TEXT) {
      const text = element.asText();
      text.setBackgroundColor(BUTTON_COLOR);
      text.setForegroundColor('#ffffff');
      text.setBold(true);
    }
  }
  
  showToast('Button created', 'Add a link URL via Insert > Link');
}

/**
 * Insert step heading (H1)
 */
function insertStepHeading() {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();
  
  if (!cursor) {
    showAlert('Please place your cursor where you want to add a step.');
    return;
  }
  
  const body = doc.getBody();
  const position = cursor.getElement();
  const parent = position.getParent();
  
  // Find the insertion index - always insert, never convert
  let insertIndex = 0;
  
  if (parent.getType() === DocumentApp.ElementType.BODY_SECTION) {
    // Cursor element is directly in body
    insertIndex = body.getChildIndex(position);
  } else {
    // Find the parent's position in body (paragraph, table, etc.)
    let currentParent = parent;
    while (currentParent && currentParent.getType() !== DocumentApp.ElementType.BODY_SECTION) {
      const tempParent = currentParent.getParent();
      if (tempParent && tempParent.getType() === DocumentApp.ElementType.BODY_SECTION) {
        insertIndex = body.getChildIndex(currentParent);
        break;
      }
      currentParent = tempParent;
    }
  }
  
  // Always insert a NEW paragraph after the current position
  const paragraph = body.insertParagraph(insertIndex + 1, '');
  paragraph.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  paragraph.setText('Step Title');
  
  showToast('Step heading created', 'This creates a new step in your codelab');
}

/**
 * Insert section heading (H2)
 */
function insertSectionHeading(level = 2) {
  const doc = DocumentApp.getActiveDocument();
  const cursor = doc.getCursor();
  
  if (!cursor) {
    showAlert('Please place your cursor where you want to add a heading.');
    return;
  }
  
  const body = doc.getBody();
  const position = cursor.getElement();
  const parent = position.getParent();
  
  // Find the insertion index - always insert, never convert
  let insertIndex = 0;
  
  if (parent.getType() === DocumentApp.ElementType.BODY_SECTION) {
    // Cursor element is directly in body
    insertIndex = body.getChildIndex(position);
  } else {
    // Find the parent's position in body (paragraph, table, etc.)
    let currentParent = parent;
    while (currentParent && currentParent.getType() !== DocumentApp.ElementType.BODY_SECTION) {
      const tempParent = currentParent.getParent();
      if (tempParent && tempParent.getType() === DocumentApp.ElementType.BODY_SECTION) {
        insertIndex = body.getChildIndex(currentParent);
        break;
      }
      currentParent = tempParent;
    }
  }
  
  // Always insert a NEW paragraph after the current position
  const paragraph = body.insertParagraph(insertIndex + 1, '');
  
  const heading = level === 2 ? DocumentApp.ParagraphHeading.HEADING2 : 
                  level === 3 ? DocumentApp.ParagraphHeading.HEADING3 :
                  DocumentApp.ParagraphHeading.HEADING4;
  
  paragraph.setHeading(heading);
  paragraph.setText(`Heading ${level}`);
  
  showToast(`H${level} created`, 'Edit the text as needed');
}

/**
 * Insert metadata table
 */
function insertMetadataTable() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  
  // Insert at the top
  const table = body.insertTable(0);
  
  const metadata = [
    ['Summary', 'A brief description of your codelab'],
    ['URL', 'your-codelab-name'],
    ['Category', 'Web'],
    ['Environment', 'Web'],
    ['Status', 'Draft'],
    ['Feedback Link', 'https://github.com/yourrepo/issues'],
    ['Analytics Account', '']
  ];
  
  metadata.forEach(([key, value]) => {
    const row = table.appendTableRow();
    row.appendTableCell(key).editAsText().setBold(true);
    row.appendTableCell(value);
  });
  
  showToast('Metadata table created', 'Fill in your codelab information');
}

/**
 * Helper: Show alert dialog
 */
function showAlert(message) {
  DocumentApp.getUi().alert('Codelab Format Tools', message, DocumentApp.getUi().ButtonSet.OK);
}

/**
 * Helper: Show toast notification
 */
function showToast(title, message) {
  DocumentApp.getActiveDocument().toast(message, title, 3);
}
