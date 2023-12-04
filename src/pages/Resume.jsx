import { Document, Font, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

const ResumeDocument = () => {
  return (
    
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Crystal Green</Text>
          <Text style={styles.contact}>300 Carteret Place</Text>
          <Text style={styles.contact}>Apt 3D</Text>
          <Text style={styles.contact}>Orange, NJ 07050</Text>
          <Text style={styles.contact}>862-205-9019</Text>
          <Text style={styles.contact2}>Email: cgreen.developer@gmail.com</Text>
          
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi molestiae voluptas ab corrupti pariatur cum magnam quae illo, recusandae fugiat omnis et excepturi perferendis! Minus, fugiat est. Dicta, id.</Text>
          <Text> Education</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi molestiae voluptas ab corrupti pariatur cum magnam quae illo, recusandae fugiat omnis et excepturi perferendis! Minus, fugiat est. Dicta, id.</Text>
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
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
    borderBottom: 3,
    paddingBottom: 3,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
    
  },
  contact: {
    fontWeight: 'thin',
  },
  contact2: {
    borderBottom: 3,
    paddingBottom: 3,
    borderBottomColor: 'gray',
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