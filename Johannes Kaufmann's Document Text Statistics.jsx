if ( app.documents.length > 0 ) {
    var
        mD = app.activeDocument,
        dS = mD.stories,
        eTB = dS.length;
    if ( dS.length > 0 ) {
        var
            dS = dS.everyItem(),
            dWord = dS.words.length,
            dFword = dS.footnotes.everyItem().words.length,
            dTword = ( dS.tables.length > 0 ? dS.tables.everyItem().cells.everyItem().words.length : 0 ),
            eC = dS.characters.length,
            lF = dS.length,
            aC = eC / eTB,
            aW = dWord / eTB,
            aWr = Math.round(aW),
            dReport = [];
           
            dReport.push ( "Document text statistics:", "===================", "" );
            dReport.push ( "Words", "------------------------------", "= " + dWord, "" );
            dReport.push ( "Characters", "------------------------------", "= " + eC, "" );
            dReport.push ("Textelements (textframes)", "------------------------------", "= " + eTB, "" );
            dReport.push ( "Letters in each textframe", "------------------------------", "= " + lF, "" );
            dReport.push ( "Average characters per textframe", "------------------------------", "= " + Math.round(aC) , "" );
            dReport.push ( "Average words per textframe", "------------------------------", "= " + aWr , "" );
            dReport.push ( "Words in footnotes", "------------------------------", "= " + dFword , "" );
            dReport.push ( "Words in tables", "------------------------------", "= " + dTword , "" );
            dReport.push ( "", "", "" ,"Johannes Kaufmann©2019" );
            
            alert ( dReport.join ( "\r" ), "Johannes Kaufmann's Document Text Statistics" );
    } else {
        alert ( "No textframes found in the document!", "Document Text Statistic" );
    }
} else {
    alert ( "No opened document!", "Document Text Statistic" );
}