export enum CourseId {
    ITP1 = 'ITP1',
    ITP2 = 'ITP2',
    CM = 'CM',
    DM = 'DM',
    FCS = 'FCS',
    HCW = 'HCW',
    ADS1 = 'ADS1',
    WD = 'WD',

    OOP = 'OOP',
    SDD = 'SDD',
    PWD = 'PWD',
    ASP = 'ASP',
    CSec = 'CSec',
    GP = 'GP',
    ADS2 = 'ADS2',
    DNW = 'DNW',

    DS = 'DS',
    DADT = 'DADT',
    MLNN = 'MLNN',
    AI = 'AI',
    VR = 'VR',
    GD = 'GD',
    AWD = 'AWD',
    IoT = 'IoT',
    ThreeDG = '3DG',
    MD = 'MD',
    ID = 'ID',
    NLP = 'NLP',
    ISP = 'ISP',
    FP = 'FP',
}

export const courseIds = Object.values(CourseId);

export enum Level {
    Four = 'Level 4',
    Five = 'Level 5',
    Six = 'Level 6',
}

export type Level4CourseId =
    | CourseId.ITP1
    | CourseId.ITP2
    | CourseId.CM
    | CourseId.DM
    | CourseId.FCS
    | CourseId.HCW
    | CourseId.ADS1
    | CourseId.WD;

export const level4CourseIds: Level4CourseId[] = [
    CourseId.ITP1,
    CourseId.ITP2,
    CourseId.CM,
    CourseId.DM,
    CourseId.FCS,
    CourseId.HCW,
    CourseId.ADS1,
    CourseId.WD,
];

export type Level5CourseId =
    | CourseId.OOP
    | CourseId.SDD
    | CourseId.PWD
    | CourseId.ASP
    | CourseId.CSec
    | CourseId.GP
    | CourseId.ADS2
    | CourseId.DNW;

export const level5CourseIds: Level5CourseId[] = [
    CourseId.OOP,
    CourseId.SDD,
    CourseId.PWD,
    CourseId.ASP,
    CourseId.CSec,
    CourseId.GP,
    CourseId.ADS2,
    CourseId.DNW,
];

export type Level6CourseId =
    | CourseId.DS
    | CourseId.DADT
    | CourseId.MLNN
    | CourseId.AI
    | CourseId.VR
    | CourseId.GD
    | CourseId.AWD
    | CourseId.IoT
    | CourseId.ThreeDG
    | CourseId.MD
    | CourseId.ID
    | CourseId.NLP
    | CourseId.ISP
    | CourseId.FP;

export const level6CourseIds: Level6CourseId[] = [
    CourseId.DS,
    CourseId.DADT,
    CourseId.MLNN,
    CourseId.AI,
    CourseId.VR,
    CourseId.GD,
    CourseId.AWD,
    CourseId.IoT,
    CourseId.ThreeDG,
    CourseId.MD,
    CourseId.ID,
    CourseId.NLP,
    CourseId.ISP,
    CourseId.FP,
];

export const courseIdsByLevelMap: { [level in Level]: CourseId[] } = {
    [Level.Four]: level4CourseIds,
    [Level.Five]: level5CourseIds,
    [Level.Six]: level6CourseIds,
};

export type CourseInformation = {
    id: string;
    name: string;
    code: string;
    syllabus: string;
    specification: string;
    languages: string;
    professor: string;
    midterm: string;
    final: string;
    blocker: boolean;
    slack: string;
    repl: string;
    rpl: boolean;
    notes: string;
    midtermPapers: string;
    examPapers: string;
};

export const courseInfoMap: {
    [courseId in CourseId]: CourseInformation;
} = {
    [CourseId.ITP1]: {
        id: 'ITP1',
        name: 'Introduction to Programming I',
        code: 'CM1005',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1005_ITP1.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1005_ITP1-Module-Spec.pdf',
        languages: 'JS (p5.js)',
        professor: 'Dr. E. Anstead, Dr. S. Katan',
        midterm: 'Projects (50%)',
        final: 'Projects (50%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CH35RKXK8',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1005-introduction-to-programming-i',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/introduction-to-programming-i/student-notes',
        midtermPapers: 'Not available',
        examPapers: 'Not available',
    },
    [CourseId.ITP2]: {
        id: 'ITP2',
        name: 'Introduction to Programming II',
        code: 'CM1010',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1010_ITP2.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1010_ITP2-Module-Spec.pdf',
        languages: 'JS (p5.js)',
        professor: 'Dr. E. Anstead, Dr. S. Katan',
        midterm: 'Report (30%)',
        final: 'Project (70%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CKNURNQKU',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1010-introduction-to-programming-ii',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/introduction-to-programming-ii/student-notes',
        midtermPapers: 'Not available',
        examPapers: 'Not available',
    },
    [CourseId.CM]: {
        id: 'CM',
        name: 'Computational Mathematics',
        code: 'CM1015',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1015_CM.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1015_CM-Module-Spec.pdf',
        languages: 'None',
        professor: 'Geraldo Aquino',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CH35SEHAS',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1015-computational-mathematics',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/computational-mathematics/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1015-cm/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1015-cm/past-exams/finals',
    },
    [CourseId.DM]: {
        id: 'DM',
        name: 'Discrete Mathematics',
        code: 'CM1020',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1020_DM-Module-Spec.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1020_DM.pdf',
        languages: 'None',
        professor: 'Dr. L. Ouarbya, Dr. A. Alfalah',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CKZT2LKPW',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1020-discrete-mathematics',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/discrete-mathematics',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1020-dm/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1020-dm/past-exams/finals',
    },
    [CourseId.FCS]: {
        id: 'FCS',
        name: 'Fundamentals of Computer Science',
        code: 'CM1025',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1025_FCS.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1025_FCS-Module-Spec.pdf',
        languages: 'None',
        professor: 'Dr. Golnaz Badkobeh',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CL275HWLF',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1025-fundamentals-of-computer-science',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/fundamentals-of-computer-science/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1025-fcs/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1025-fcs/past-exams/finals',
    },
    [CourseId.HCW]: {
        id: 'HCW',
        name: 'How Computers Work',
        code: 'CM1030',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1030_HCW.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1030_HCW-Module-Spec.pdf',
        languages: 'None',
        professor: 'Dr. Marco Gillies',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CHFR3DFBR',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1030-how-computers-work',
        rpl: true,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/how-computers-work/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1030-hcw/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1030-hcw/past-exams/finals',
    },
    [CourseId.ADS1]: {
        id: 'ADS1',
        name: 'Algorithms and Data Structures I',
        code: 'CM1035',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1035_ADS1.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1035_ADS1-Module-Spec.pdf',
        languages: 'Pseudocode',
        professor: 'Dr. Matty Hoban',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CKZT2SR0U',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1035-algorithms-and-data-structures-i',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/algorithms-and-data-structures-i/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1035-ads1/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1035-ads1/past-exams/finals',
    },
    [CourseId.WD]: {
        id: 'WD',
        name: 'Web Development',
        code: 'CM1040',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM1040_WD.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM1040_WD-Module-Spec.pdf',
        languages: 'HTML/CSS/Javascript',
        professor: 'Dr. Nick Hine',
        midterm: 'Group project (30%)	',
        final: 'Project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CH3L72QD8',
        repl: 'https://world-class.github.io/REPL/modules/level-4/cm-1040-web-development',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-4/web-development/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1040-wd/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm1040-wd/past-exams/finals',
    },
    [CourseId.OOP]: {
        id: 'OOP',
        name: 'Object Oriented Programming',
        code: 'CM2005',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2005_OOP.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2005_OOP-Module-Spec.pdf',
        languages: 'C++ (final: JUCE)',
        professor: 'Dr Matthew Yee-King',
        midterm: 'Project (50%)',
        final: 'Project (50%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CUKR6NR0X',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2005-object-oriented-programming',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/object-oriented-programming/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2005-oop/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2005-oop/past-exams/finals',
    },
    [CourseId.SDD]: {
        id: 'SDD',
        name: 'Software Design and Development',
        code: 'CM2010',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2010_SDD.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2010_SDD-Module-Spec.pdf',
        languages: 'C++/JS/Python',
        professor: 'Dr Matthew Yee-King',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: true,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01A9AP06NQ',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2010-software-design-and-development',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/software-design-and-development/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2010-sdd/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2010-sdd/past-exams/finals',
    },
    [CourseId.PWD]: {
        id: 'PWD',
        name: 'Programming with Data',
        code: 'CM2015',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2015_PWD.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2015_PWD-Module-Spec.pdf',
        languages: 'Python',
        professor: 'Sean McGrath',
        midterm: 'Project (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01A02PCW1K',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2015-programming-with-data',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/programming-with-data/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2015-pwd/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2015-pwd/past-exams/finals',
    },
    [CourseId.ASP]: {
        id: 'ASP',
        name: 'Agile Software Projects',
        code: 'CM2020',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2020_ASP.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2020_ASP-Module-Spec.pdf',
        languages: 'Any',
        professor: 'Sean McGrath',
        midterm: 'Group report (30%)',
        final: 'Group project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01A9AR0A4C',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2020-agile-software-projects',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/agile-software-projects/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2020-asp/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2020-asp/past-exams/finals',
    },
    [CourseId.CSec]: {
        id: 'CSec',
        name: 'Computer Security',
        code: 'CM2025',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2025_CS.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2025_CS-Module-Spec.pdf',
        languages: 'None',
        professor: 'Robert Zimmer',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01AT0JTB7S',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2025-computer-security',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/computer-security/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2025-csec/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2025-csec/past-exams/finals',
    },
    [CourseId.GP]: {
        id: 'GP',
        name: 'Graphics Programming',
        code: 'CM2030',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2030_GP.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2030_GP-Module-Spec.pdf',
        languages: 'JS (p5.js, matter.js)',
        professor: 'Theodoros Papatheodorou',
        midterm: 'Mini-projects (50%)',
        final: 'Mini-projects (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CUJ0E4AA1',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2030-graphics-programming',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/graphics-programming/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2030-gp/past-exams/Midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2030-gp/past-exams/Finals',
    },
    [CourseId.ADS2]: {
        id: 'ADS2',
        name: 'Algorithms and Data Structures II',
        code: 'CM2035',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2035_ADS2.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2035_ADS2-Module-Spec.pdf',
        languages: 'Pseudocode (optional C++)',
        professor: 'Alejandra Begheli Zapata',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CUKR7TCDD',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2035-algorithms-and-data-structures-ii',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/algorithms-and-data-structures-ii/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2035-ads2/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2035-ads2/past-exams/finals',
    },
    [CourseId.DNW]: {
        id: 'DNW',
        name: 'Databases, Networks and the Web',
        code: 'CM2040',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM2040_DNW.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM2040_DNW-Module-Spec.pdf',
        languages: 'nodejs/html/mysql',
        professor: 'Dr. Elaheh Homayounvala',
        midterm: 'Project (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/CU6FK1W75',
        repl: 'https://world-class.github.io/REPL/modules/level-5/cm-2040-databases-networks-and-the-web',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-5/databases-networks-and-the-web/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2040-dnw/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm2040-dnw/past-exams/finals',
    },
    [CourseId.DS]: {
        id: 'DS',
        name: 'Data science',
        code: 'CM3005',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3005_DS.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3005_DS-Module-Spec.pdf',
        languages: 'Python',
        professor: 'Dr. Tony Russel-Rose',
        midterm: 'Project (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01JX9ZDLKC',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3005-data-science',
        rpl: true,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/data-science/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3005-ds/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3005-ds/past-exams/finals',
    },
    [CourseId.DADT]: {
        id: 'DADT',
        name: 'Databases and advanced data techniques ',
        code: 'CM3010',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3010_DADT.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3010_DADT-Module-Spec.pdf',
        languages: 'SQL, XML, SPARQL',
        professor: 'Dr. David Lewis',
        midterm: 'Project (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01JJ7SSML7',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3010-databases-advanced-data-techniques',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/databases-and-advanced-data-techniques/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3010-dadt/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3010-dadt/past-exams/finals',
    },
    [CourseId.MLNN]: {
        id: 'MLNN',
        name: 'Machine learning and neural networks',
        code: 'CM3015',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3015_MLNN.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3015_MLNN-Module-Spec.pdf',
        languages: 'Python',
        professor: 'Dr. J. Ward, Dr. T. Blackwell',
        midterm: 'Project (50%)',
        final: 'Project (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C011X17R90X',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3015-machine-learning-neural-networks',
        rpl: true,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/machine-learning-and-neural-networks/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3015-mlnn/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3015-mlnn/past-exams/finals',
    },
    [CourseId.AI]: {
        id: 'AI',
        name: 'Artificial intelligence',
        code: 'CM3020',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3020_AI.pdf',
        specification: 'Not available',
        languages: 'Python',
        professor: 'Dr. M. Yee-King, Dr. L. Soldatova',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C012HTC1REG',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3020-artificial-intelligence',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/artificial-intelligence/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3020-ai/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3020-ai/past-exams/finals',
    },
    [CourseId.VR]: {
        id: 'VR',
        name: 'Virtual reality',
        code: 'CM3025',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3025_VR.pdf',
        specification: 'Not available',
        languages: 'C# (Unity)',
        professor: 'Dr. M. Gillies, Dr. S. Pan',
        midterm: 'Report (30%)',
        final: 'Project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01KBKPQV3K',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3025-virtual-reality',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/virtual-reality/student-notes',
        midtermPapers: 'Not available',
        examPapers: 'Not available',
    },
    [CourseId.GD]: {
        id: 'GD',
        name: 'Games development',
        code: 'CM3030',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3030_GD.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3030_GD-Module-Spec.pdf',
        languages: 'C# (Unity)',
        professor: 'Dr. Tom Cole',
        midterm: 'Group report (30%)',
        final: 'Group project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01JX9YQ32N',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3030-games-development',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/games-development/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3030-gd/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3030-gd/finals',
    },
    [CourseId.AWD]: {
        id: 'AWD',
        name: 'Advanced web development',
        code: 'CM3035',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3035_AWD.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3035_AWD-Module-Spec.pdf',
        languages: 'Python (django), HTML, SQL',
        professor: 'Dr. Daniel Buchan',
        midterm: 'Project (50%)',
        final: 'Project (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C011X11DW5D',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3035-advanced-web-development',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/advanced-web-development/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3035-awd/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3035-awd/finals',
    },
    [CourseId.IoT]: {
        id: 'IoT',
        name: 'Physical computing and the internet of things',
        code: 'CM3040',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3040_IOT.pdf',
        specification: 'Not available',
        languages: 'C++ (arduino)',
        professor: 'Dr. Darpan Triboan',
        midterm: 'Report (30%)',
        final: 'Project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01KBKRUM25',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3040-physical-computing-iot',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/physical-computing-and-internet-of-things/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3040-iot/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3040-iot/finals',
    },
    [CourseId.ThreeDG]: {
        id: '3DG',
        name: '3D graphics and animation',
        code: 'CM3045',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3045_3DGA.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3045_3DGA-Module-Spec.pdf',
        languages: 'C# (Unity)',
        professor: 'Dr. M. Gillies, Dr. S. Pan',
        midterm: 'Mini-projects (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01JX9ZDLKC',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3045-3d-graphics-animation',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/3d-graphics-and-animation/student-notes',
        midtermPapers: 'Not available',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3045-3dga',
    },
    [CourseId.MD]: {
        id: 'MD',
        name: 'Mobile development',
        code: 'CM3050',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3050_MD.pdf',
        specification: 'Not available',
        languages: 'JS (React Native)',
        professor: 'Joe McAlister',
        midterm: 'mini-projects (30%)',
        final: 'Project (70%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01KBKSFM09',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3050-mobile-development',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/mobile-development/student-notes',
        midtermPapers: 'Not available',
        examPapers: 'Not available',
    },
    [CourseId.ID]: {
        id: 'ID',
        name: 'Interaction design',
        code: 'CM3055',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3055_ID.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3055_ID-Module-Spec.pdf',
        languages: 'None',
        professor: 'Dr. S. Wiseman, Dr. S. McGrath',
        midterm: 'Written (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C012QBHE72M',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3055-interaction-design',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/interaction-design/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3055-id/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3055-id/finals',
    },
    [CourseId.NLP]: {
        id: 'NLP',
        name: 'Natural language processing',
        code: 'CM3060',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3060_NLP.pdf',
        specification: 'Not available',
        languages: 'Python',
        professor: 'Dr. Tony Russel-Rose',
        midterm: 'Project (50%)',
        final: 'Written (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01KBKTE47K',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3060-natural-language-processing',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/natural-language-processing/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3060-nlp/past-exams/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3060-nlp/past-exams/finals',
    },
    [CourseId.ISP]: {
        id: 'ISP',
        name: 'Intelligent signal processing',
        code: 'CM3065',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3065_ISP.pdf',
        specification:
            'https://github.com/world-class/binary-assets/blob/master/modules/module-specification/CM3065_ISP-Module-Spec.pdf',
        languages: 'JS (p5.js), Python',
        professor: 'Dr. Francisco Marti Perez',
        midterm: 'Mini-projects (50%)',
        final: 'Mini-projects (50%)',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01K9UK3865',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3065-intelligent-signal-processing',
        rpl: false,
        notes: 'https://github.com/world-class/notes/tree/master/level-6/intelligent-signal-processing/student-notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3065-isp/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3065-isp/finals',
    },
    [CourseId.FP]: {
        id: 'FP',
        name: 'Final project',
        code: 'CM3070',
        syllabus:
            'https://github.com/world-class/binary-assets/blob/master/modules/syllabi/Syllabus_CM3070_FP.pdf',
        specification: 'Not available',
        languages: 'Any',
        professor: 'Dr. M. Gillies',
        midterm: 'Report',
        final: 'Project + exam',
        blocker: false,
        slack: 'https://app.slack.com/client/TDT1N1BUG/C01JS7VL0TG',
        repl: 'https://world-class.github.io/REPL/modules/level-6/cm-3070-final-project',
        rpl: false,
        notes: 'https://world-class.github.io/REPL/modules/level-6/cm-3070-final-project/#notes',
        midtermPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3070-fp/midterms',
        examPapers:
            'https://github.com/world-class/binary-assets/tree/master/modules/cm3070-fp/finals',
    },
};

// TODO: This information should be moved to a database
export enum CourseDifficulty {
    VeryEasy = 'Very easy',
    Easy = 'Easy',
    Moderate = 'Moderate',
    Difficult = 'Difficult',
    VeryDifficult = 'Very difficult',
}
export enum CourseTime {
    Zero = '0-2',
    Two = '2-4',
    Four = '4-6',
    Six = '6-8',
    Eight = '8-10',
    Ten = '10+',
}

export enum CourseQuality {
    VeryGOod = 'Very good',
    Good = 'Good',
    Normal = 'Normal',
    Poor = 'Poor',
    VeryPoor = 'Very poor',
}

export enum CourseSelfStudy {
    TotallySufficient = 'Totally sufficient',
    MostlySufficient = 'Mostly sufficient',
    JustSufficient = 'Just sufficient',
    HardlySufficient = 'Hardly Sufficient',
    NotAtAll = 'Not at all',
}

export enum CourseLearning {
    ALot = 'A lot',
    AGoodAmount = 'A good amount',
    ALittle = 'A little',
    Nothing = 'Nothing',
}

export enum CourseInterest {
    VeryInteresting = 'Very Interesting',
    Interesting = 'Interesting',
    Fine = 'Fine',
    Boring = 'Boring',
    VeryBoring = 'Very Boring',
}

export type CourseTemporaryInformation = {
    difficulty?: CourseDifficulty;
    time?: CourseTime;
    quality?: CourseQuality;
    selfStudy?: CourseSelfStudy;
    learning?: CourseLearning;
    interest?: CourseInterest;
};

export const courseTEMPORARYStatsMap: {
    [courseId in CourseId]: CourseTemporaryInformation;
} = {
    [CourseId.ITP1]: {
        difficulty: CourseDifficulty.Easy,
        time: CourseTime.Four,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Interesting,
    },
    [CourseId.ITP2]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Four,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Interesting,
    },
    [CourseId.CM]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Four,
        quality: CourseQuality.Poor,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.DM]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Six,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.FCS]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Four,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.HCW]: {
        difficulty: CourseDifficulty.VeryEasy,
        time: CourseTime.Two,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.TotallySufficient,
        learning: CourseLearning.ALot,
        interest: CourseInterest.Interesting,
    },
    [CourseId.ADS1]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Four,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Interesting,
    },
    [CourseId.WD]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Six,
        quality: CourseQuality.Poor,
        selfStudy: CourseSelfStudy.HardlySufficient,
        learning: CourseLearning.ALittle,
        interest: CourseInterest.Fine,
    },
    [CourseId.OOP]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Eight,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Interesting,
    },
    [CourseId.SDD]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Four,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.ALittle,
        interest: CourseInterest.Fine,
    },
    [CourseId.PWD]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Six,
        quality: CourseQuality.Poor,
        selfStudy: CourseSelfStudy.HardlySufficient,
        learning: CourseLearning.ALittle,
        interest: CourseInterest.Fine,
    },
    [CourseId.ASP]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Six,
        quality: CourseQuality.VeryPoor,
        selfStudy: CourseSelfStudy.HardlySufficient,
        learning: CourseLearning.Nothing,
        interest: CourseInterest.VeryBoring,
    },
    [CourseId.CSec]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Two,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.ALittle,
        interest: CourseInterest.Fine,
    },
    [CourseId.GP]: {
        difficulty: CourseDifficulty.Easy,
        time: CourseTime.Four,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.MostlySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Interesting,
    },
    [CourseId.ADS2]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Six,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.DNW]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Four,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.JustSufficient,
        learning: CourseLearning.ALittle,
        interest: CourseInterest.Fine,
    },
    [CourseId.DS]: {},
    [CourseId.DADT]: {},
    [CourseId.MLNN]: {},
    [CourseId.AI]: {
        difficulty: CourseDifficulty.Easy,
        time: CourseTime.Two,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.TotallySufficient,
        learning: CourseLearning.ALot,
        interest: CourseInterest.Fine,
    },
    [CourseId.VR]: {},
    [CourseId.GD]: {
        difficulty: CourseDifficulty.Moderate,
        time: CourseTime.Two,
        quality: CourseQuality.Good,
        selfStudy: CourseSelfStudy.TotallySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.AWD]: {},
    [CourseId.IoT]: {
        difficulty: CourseDifficulty.VeryEasy,
        time: CourseTime.Two,
        quality: CourseQuality.Poor,
        selfStudy: CourseSelfStudy.TotallySufficient,
        learning: CourseLearning.ALot,
        interest: CourseInterest.Fine,
    },
    [CourseId.ThreeDG]: {},
    [CourseId.MD]: {
        difficulty: CourseDifficulty.Difficult,
        time: CourseTime.Eight,
        quality: CourseQuality.Normal,
        selfStudy: CourseSelfStudy.TotallySufficient,
        learning: CourseLearning.AGoodAmount,
        interest: CourseInterest.Fine,
    },
    [CourseId.ID]: {},
    [CourseId.NLP]: {},
    [CourseId.ISP]: {},
    [CourseId.FP]: {},
};

export const courseTEMPORARYRankingMap: {
    [courseId in CourseId]: {
        difficulty: number;
        time: number;
        quality: number;
        selfStudy: number;
        learning: number;
        interest: number;
        total: number;
    };
} = {
    [CourseId.ITP1]: {
        difficulty: 2,
        time: 2,
        quality: 2,
        selfStudy: 2,
        learning: 7,
        interest: 3,
        total: 2,
    },
    [CourseId.ITP2]: {
        difficulty: 5,
        time: 6,
        quality: 4,
        selfStudy: 4,
        learning: 5,
        interest: 4,
        total: 4,
    },
    [CourseId.CM]: {
        difficulty: 6,
        time: 5,
        quality: 7,
        selfStudy: 7,
        learning: 6,
        interest: 7,
        total: 7,
    },
    [CourseId.DM]: {
        difficulty: 8,
        time: 8,
        quality: 5,
        selfStudy: 6,
        learning: 4,
        interest: 6,
        total: 6,
    },
    [CourseId.FCS]: {
        difficulty: 7,
        time: 4,
        quality: 6,
        selfStudy: 5,
        learning: 3,
        interest: 5,
        total: 5,
    },
    [CourseId.HCW]: {
        difficulty: 1,
        time: 1,
        quality: 1,
        selfStudy: 1,
        learning: 1,
        interest: 1,
        total: 1,
    },
    [CourseId.ADS1]: {
        difficulty: 4,
        time: 3,
        quality: 3,
        selfStudy: 3,
        learning: 2,
        interest: 2,
        total: 3,
    },
    [CourseId.WD]: {
        difficulty: 3,
        time: 7,
        quality: 8,
        selfStudy: 8,
        learning: 8,
        interest: 8,
        total: 8,
    },
    [CourseId.OOP]: {
        difficulty: 8,
        time: 8,
        quality: 2,
        selfStudy: 6,
        learning: 1,
        interest: 1,
        total: 5,
    },
    [CourseId.SDD]: {
        difficulty: 4,
        time: 3,
        quality: 4,
        selfStudy: 3,
        learning: 7,
        interest: 4,
        total: 3,
    },
    [CourseId.PWD]: {
        difficulty: 5,
        time: 5,
        quality: 7,
        selfStudy: 7,
        learning: 6,
        interest: 7,
        total: 7,
    },
    [CourseId.ASP]: {
        difficulty: 6,
        time: 7,
        quality: 8,
        selfStudy: 8,
        learning: 8,
        interest: 8,
        total: 8,
    },
    [CourseId.CSec]: {
        difficulty: 2,
        time: 1,
        quality: 5,
        selfStudy: 2,
        learning: 4,
        interest: 5,
        total: 2,
    },
    [CourseId.GP]: {
        difficulty: 1,
        time: 2,
        quality: 1,
        selfStudy: 1,
        learning: 3,
        interest: 2,
        total: 1,
    },
    [CourseId.ADS2]: {
        difficulty: 7,
        time: 6,
        quality: 3,
        selfStudy: 4,
        learning: 2,
        interest: 3,
        total: 6,
    },
    [CourseId.DNW]: {
        difficulty: 3,
        time: 4,
        quality: 6,
        selfStudy: 5,
        learning: 5,
        interest: 6,
        total: 4,
    },
    [CourseId.DS]: {
        difficulty: 1,
        time: 1,
        quality: 1,
        selfStudy: 1,
        learning: 1,
        interest: 1,
        total: 1,
    },
    [CourseId.DADT]: {
        difficulty: 2,
        time: 2,
        quality: 2,
        selfStudy: 2,
        learning: 2,
        interest: 2,
        total: 2,
    },
    [CourseId.MLNN]: {
        difficulty: 3,
        time: 3,
        quality: 3,
        selfStudy: 3,
        learning: 3,
        interest: 3,
        total: 3,
    },
    [CourseId.AI]: {
        difficulty: 4,
        time: 4,
        quality: 4,
        selfStudy: 4,
        learning: 4,
        interest: 4,
        total: 4,
    },
    [CourseId.VR]: {
        difficulty: 5,
        time: 5,
        quality: 5,
        selfStudy: 5,
        learning: 5,
        interest: 5,
        total: 5,
    },
    [CourseId.GD]: {
        difficulty: 6,
        time: 6,
        quality: 6,
        selfStudy: 6,
        learning: 6,
        interest: 6,
        total: 6,
    },
    [CourseId.AWD]: {
        difficulty: 7,
        time: 7,
        quality: 7,
        selfStudy: 7,
        learning: 7,
        interest: 7,
        total: 7,
    },
    [CourseId.IoT]: {
        difficulty: 8,
        time: 8,
        quality: 8,
        selfStudy: 8,
        learning: 8,
        interest: 8,
        total: 8,
    },
    [CourseId.ThreeDG]: {
        difficulty: 9,
        time: 9,
        quality: 9,
        selfStudy: 9,
        learning: 9,
        interest: 9,
        total: 9,
    },
    [CourseId.MD]: {
        difficulty: 10,
        time: 10,
        quality: 10,
        selfStudy: 10,
        learning: 10,
        interest: 10,
        total: 10,
    },
    [CourseId.ID]: {
        difficulty: 11,
        time: 11,
        quality: 11,
        selfStudy: 11,
        learning: 11,
        interest: 11,
        total: 11,
    },
    [CourseId.NLP]: {
        difficulty: 12,
        time: 12,
        quality: 12,
        selfStudy: 12,
        learning: 12,
        interest: 12,
        total: 12,
    },
    [CourseId.ISP]: {
        difficulty: 13,
        time: 13,
        quality: 13,
        selfStudy: 13,
        learning: 13,
        interest: 13,
        total: 13,
    },
    [CourseId.FP]: {
        difficulty: 14,
        time: 14,
        quality: 14,
        selfStudy: 14,
        learning: 14,
        interest: 14,
        total: 14,
    },
};

export const courseTEMPORARYFeatureMap: {
    [courseId in CourseId]?: {
        difficulty: number;
        time: number;
        quality: number;
        selfStudy: number;
        learning: number;
        interest: number;
    };
} = {
    [CourseId.ITP1]: {
        difficulty: 1.8369565217391304,
        time: 2.5568181818181817,
        quality: 1.7303370786516854,
        selfStudy: 1.4943820224719102,
        learning: 2.0919540229885056,
        interest: 1.7954545454545454,
    },
    [CourseId.ITP2]: {
        difficulty: 3.0655737704918034,
        time: 3.6,
        quality: 2.283333333333333,
        selfStudy: 2.35,
        learning: 2.1186440677966103,
        interest: 2.2333333333333334,
    },
    [CourseId.CM]: {
        difficulty: 3.0985915492957745,
        time: 3.323529411764706,
        quality: 3.463768115942029,
        selfStudy: 2.9558823529411766,
        learning: 2.1641791044776117,
        interest: 2.9558823529411766,
    },
    [CourseId.DM]: {
        difficulty: 3.308641975308642,
        time: 3.8,
        quality: 2.6790123456790123,
        selfStudy: 2.4625,
        learning: 1.6794871794871795,
        interest: 2.375,
    },
    [CourseId.FCS]: {
        difficulty: 3.4705882352941178,
        time: 3.283582089552239,
        quality: 2.911764705882353,
        selfStudy: 2.611940298507463,
        learning: 1.7846153846153847,
        interest: 2.590909090909091,
    },
    [CourseId.HCW]: {
        difficulty: 2.2333333333333334,
        time: 2.4,
        quality: 2.5185185185185186,
        selfStudy: 2.1481481481481484,
        learning: 2.1153846153846154,
        interest: 2.7241379310344827,
    },
    [CourseId.ADS1]: {
        difficulty: 3.1228070175438596,
        time: 3.1578947368421053,
        quality: 2.2241379310344827,
        selfStudy: 2.2241379310344827,
        learning: 1.7543859649122806,
        interest: 2.0701754385964914,
    },
    [CourseId.WD]: {
        difficulty: 2.765625,
        time: 3.8548387096774195,
        quality: 4,
        selfStudy: 3.661290322580645,
        learning: 2.693548387096774,
        interest: 3.4761904761904763,
    },
    [CourseId.OOP]: {
        difficulty: 4.065217391304348,
        time: 4.488888888888889,
        quality: 1.5333333333333334,
        selfStudy: 2.4782608695652173,
        learning: 1.5217391304347827,
        interest: 1.4782608695652173,
    },
    [CourseId.SDD]: {
        difficulty: 2.744186046511628,
        time: 2.744186046511628,
        quality: 2.395348837209302,
        selfStudy: 1.9772727272727273,
        learning: 2.272727272727273,
        interest: 2.477272727272727,
    },
    [CourseId.PWD]: {
        difficulty: 3.2,
        time: 3.4444444444444446,
        quality: 3.7941176470588234,
        selfStudy: 3.6857142857142855,
        learning: 2.4571428571428573,
        interest: 3.142857142857143,
    },
    [CourseId.ASP]: {
        difficulty: 3.735294117647059,
        time: 4.117647058823529,
        quality: 4.484848484848484,
        selfStudy: 4.029411764705882,
        learning: 3.411764705882353,
        interest: 4.4411764705882355,
    },
    [CourseId.CSec]: {
        difficulty: 2.433333333333333,
        time: 2.193548387096774,
        quality: 2.933333333333333,
        selfStudy: 2.161290322580645,
        learning: 2.4838709677419355,
        interest: 2.838709677419355,
    },
    [CourseId.GP]: {
        difficulty: 2.054054054054054,
        time: 2.4324324324324325,
        quality: 1.5277777777777777,
        selfStudy: 1.6486486486486487,
        learning: 1.972972972972973,
        interest: 1.8918918918918919,
    },
    [CourseId.ADS2]: {
        difficulty: 3.6363636363636362,
        time: 3.477272727272727,
        quality: 2.2045454545454546,
        selfStudy: 2.090909090909091,
        learning: 1.8,
        interest: 2.477272727272727,
    },
    [CourseId.DNW]: {
        difficulty: 2.763157894736842,
        time: 2.8947368421052633,
        quality: 2.8055555555555554,
        selfStudy: 2.5,
        learning: 2.324324324324324,
        interest: 2.8157894736842106,
    },
    [CourseId.DS]: {
        difficulty: 3,
        time: 2,
        quality: 3,
        selfStudy: 3,
        learning: 2,
        interest: 3,
    },
    // [CourseId.DADT]: {},
    // [CourseId.MLNN]: {},
    [CourseId.AI]: {
        difficulty: 2,
        time: 2,
        quality: 3,
        selfStudy: 4,
        learning: 3,
        interest: 3,
    },
    // [CourseId.VR]: {},
    [CourseId.GD]: {
        difficulty: 3,
        time: 2,
        quality: 2,
        selfStudy: 2,
        learning: 2,
        interest: 3,
    },
    // [CourseId.AWD]: {},
    // [CourseId.IoT]: {},
    // [CourseId.ThreeDG]: {},
    [CourseId.MD]: {
        difficulty: 4,
        time: 5,
        quality: 3,
        selfStudy: 3,
        learning: 2,
        interest: 3,
    },
    // [CourseId.ID]: {},
    // [CourseId.NLP]: {},
    // [CourseId.ISP]: {},
    // [CourseId.FP]: {},
};
