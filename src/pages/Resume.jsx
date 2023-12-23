import { Document, Page, Image, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import flower from '../images/friendlyfleur.png';
import resume from '../images/resume.png';

const ResumeDocument = () => {
  return (
    
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
          src={resume}
        />
        </View>
      </Page>
    </Document>
   
  );
};
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Times-Roman',
    fontSize: 12,
    padding: 40,
  }

});
const Resume = () => {
  const generatePDF = () => {
    const blob = new Blob([<ResumeDocument />], { type: 'application/pdf' });
    saveAs(blob, 'CGreen_Resume.pdf');
  };
  
return (
<div className="resume">
      <h2>Resume</h2>
      <PDFViewer width="80%" height={500}>
        <ResumeDocument />
      </PDFViewer>
      <PDFDownloadLink className="resumebutton innerbutton" document={<ResumeDocument />} fileName="Your_Resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>

    </div>
  )
}
export default Resume