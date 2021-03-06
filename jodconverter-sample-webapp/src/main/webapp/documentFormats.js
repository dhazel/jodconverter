importFormatTable = new Array();
importFormatTable['odt'] = 'Text';
importFormatTable['sxw'] = 'Text';
importFormatTable['doc'] = 'Text';
importFormatTable['docx'] = 'Text';
importFormatTable['rtf'] = 'Text';
importFormatTable['txt'] = 'Text';
importFormatTable['csv'] = 'Spreadsheet';
importFormatTable['ods'] = 'Spreadsheet';
importFormatTable['sxc'] = 'Spreadsheet';
importFormatTable['xls'] = 'Spreadsheet';
importFormatTable['xlsx'] = 'Spreadsheet';
importFormatTable['odp'] = 'Presentation';
importFormatTable['sxi'] = 'Presentation';
importFormatTable['ppt'] = 'Presentation';
importFormatTable['pptx'] = 'Presentation';

exportFormatTable = new Array();
exportFormatTable['Text'] = Array();
exportFormatTable['Text'][0] = new Option('Portable Document Format (pdf)', 'pdf');
exportFormatTable['Text'][1] = new Option('OpenDocument Text (odt)', 'odt');
//exportFormatTable['Text'][2] = new Option('OpenOffice.org 1.0 Text Document (sxw)', 'sxw');
exportFormatTable['Text'][2] = new Option('Microsoft Word (doc)', 'doc');
exportFormatTable['Text'][3] = new Option('Rich Text Format (rtf)', 'rtf');
exportFormatTable['Text'][4] = new Option('Plain Text (txt)', 'txt');

exportFormatTable['Spreadsheet'] = Array();
exportFormatTable['Spreadsheet'][0] = new Option('Portable Document Format (pdf)', 'pdf');
exportFormatTable['Spreadsheet'][1] = new Option('OpenDocument Spreadsheet (ods)', 'ods');
//exportFormatTable['Spreadsheet'][2] = new Option('OpenOffice.org 1.0 Spreadsheet (sxc)', 'sxc');
exportFormatTable['Spreadsheet'][2] = new Option('Microsoft Excel (xls)', 'xls');
exportFormatTable['Spreadsheet'][3] = new Option('Comma-Separated Values (csv)', 'csv');

exportFormatTable['Presentation'] = Array();
exportFormatTable['Presentation'][0] = new Option('Portable Document Format (pdf)', 'pdf');
exportFormatTable['Presentation'][1] = new Option('Macromedia Flash (swf)', 'swf');
exportFormatTable['Presentation'][2] = new Option('OpenDocument Presentation (odp)', 'odp');
//exportFormatTable['Presentation'][3] = new Option('OpenOffice.org 1.0 Presentation (sxi)', 'sxi');
exportFormatTable['Presentation'][3] = new Option('Microsoft PowerPoint (ppt)', 'ppt');

