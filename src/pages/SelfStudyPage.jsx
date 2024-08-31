import CourseLayout from "../components/CourseLayout.jsx";

const SelfStudyPage = () => {
   const pageProps = {
    title:"Self Study Courses",
    body:"Laoreet molestie nec pulvinar aenean leo est augue consectetur pulvinar. Aliquet in curae; non euismod ut commodo ultricies enim fermentum. Natoque montes nunc euismod dis commodo. Nam morbi morbi ullamcorper nisl. Litora porta libero bibendum augue sagittis potenti venenatis ridiculus morbi et senectus justo. Sociis et hendrerit accumsan ipsum pretium tristique fermentum nibh libero consequat ligula fames. Varius scelerisque nulla cras donec, ornare nostra eget posuere. Taciti diam mi proin. Adipiscing duis suspendisse aptent massa vel vel potenti. Ipsum integer felis sollicitudin nisl. Dignissim risus aenean mattis justo ut turpis aptent.",
    cards:[
        {
            image: '/logo192.png',
            title: 'Placement and Progress Testing',
            body:'Laoreet molestie nec pulvinar aenean leo est augue consectetur pulvinar. Aliquet in curae; non euismod ut commodo ultricies enim fermentum. Natoque montes nunc euismod dis commodo. Nam morbi morbi ullamcorper nisl.',
            to:'',
            buttonText: 'Try it!'
        },
        {
            image: '/logo192.png',
            title: 'Five Levels of Instruction',
            body:'Laoreet molestie nec pulvinar aenean leo est augue consectetur pulvinar. Aliquet in curae; non euismod ut commodo ultricies enim fermentum. Natoque montes nunc euismod dis commodo. Nam morbi morbi ullamcorper nisl.',
            to:'',
            buttonText: 'Try it!'
        },
        {
            image: '/logo192.png',
            title: 'Reading, Speaking, Listening, and Speaking',
            body:'Laoreet molestie nec pulvinar aenean leo est augue consectetur pulvinar. Aliquet in curae; non euismod ut commodo ultricies enim fermentum. Natoque montes nunc euismod dis commodo. Nam morbi morbi ullamcorper nisl.',
            to:'',
            buttonText: 'Try it!'
        }

    ]
   };

   return (
    <CourseLayout
        title={pageProps.title}
        body={pageProps.body}
        cards={pageProps.cards}
    />
   )
};

export default SelfStudyPage;