import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

const getSheetName = (formType) => {
    if (formType === 'contact') {
      return 'Sheet1';
    } else if (formType === 'demo') {
      return 'Sheet2';
    }
  };

const writeToSheet = async (formData, formType) => {
    try {
      // Create a new instance of GoogleSpreadsheet
      const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  
      // Authenticate using your service account credentials
      await doc.useServiceAccountAuth({
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
  
      // Load the sheet by its title
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle[getSheetName(formType)];
  
      // Prepare the data to be written to the sheet
      const values = [
        [
          formData.name,
          formData.email,
          formData.country,
          formData.phone,
          ...(formType === 'contact'
            ? [formData.query]
            : [
                formData.technology,
                formData.preferredDate,
                formData.otherTechnology,
              ]),
        ],
      ];
  
      // Append the data to the sheet
      await sheet.addRows(values);
  
      console.log('Data written to Google Sheets successfully.');
    } catch (error) {
      console.error('Error writing data to Google Sheets:', error);
    }
  };
  
  export default writeToSheet;
  