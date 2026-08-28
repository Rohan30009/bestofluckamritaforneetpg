const questions = [

    // QUESTION 1
    {
        question: `I tell Dr Amrita:

“Whenever I see you, my pupils dilate.”

She replies, “That could literally just be sympathetic stimulation.”

Which muscle causes pupillary dilation?`,

        answers: [
            "A. Sphincter pupillae",
            "B. Dilator pupillae",
            "C. Ciliary muscle",
            "D. Orbicularis hopelessromanticus"
        ],

        correct: [1],

        correctMessage:
            "Dilator pupillae. Sympathetic stimulation wins again."
    },


    // QUESTION 2
    {
        question: `I tell Dr Amrita:

“You take my breath away.”

She becomes concerned, obtains an ABG, and discovers PaCO₂ of 29 mmHg after I hyperventilate during an argument.

Which disturbance is most likely?`,

        answers: [
            "A. Respiratory acidosis",
            "B. Respiratory alkalosis",
            "C. Metabolic alkalosis",
            "D. Acute girlfriend-induced pneumonitis"
        ],

        correct: [1],

        correctMessage:
            "Hyperventilation decreases PaCO₂, producing respiratory alkalosis. Romance has once again become an ABG question."
    },


    // QUESTION 3
    {
        question: `A medical student says:

“Every time I see you, I develop palpitations. Are you willing to become my propranolol?”

Propranolol acts primarily as:`,

        answers: [
            "A. Selective β1 antagonist",
            "B. Nonselective β antagonist",
            "C. α1 agonist",
            "D. Emotional-support molecule"
        ],

        correct: [1],

        correctMessage:
            "Propranolol is a nonselective β antagonist and blocks both β1 and β2 receptors."
    },


    // QUESTION 4
    {
        question: `Rohan confesses to Amrita:

“Are you oxygen? Because I have four binding sites and somehow I still feel incomplete without you.”

Adult hemoglobin A consists of:`,

        answers: [
            "A. α₂β₂",
            "B. α₂γ₂",
            "C. α₂δ₂",
            "D. Romeo₂Juliet₂"
        ],

        correct: [0],

        correctMessage:
            "Adult hemoglobin A is α₂β₂. Four chains, considerably fewer emotional complications."
    },


    // QUESTION 5
    {
        question: `Rohan remembers the Taylor Swift song Amrita sang for him and tells her:

“You've gone viral in my heart.”

Viruses require host cells primarily because they:`,

        answers: [
            "A. Lack independent machinery necessary for replication",
            "B. Lack nucleic acids",
            "C. Cannot contain proteins",
            "D. Are emotionally codependent"
        ],

        correct: [0],

        correctMessage:
            "Viruses lack the independent cellular machinery necessary for replication and therefore depend on host cells."
    },


    // QUESTION 6
    {
        question: `Rohan develops periumbilical pain that later migrates to the right lower quadrant while on a first date with Amrita.

He refuses to leave because “things are actually going really well.”

Which diagnosis is most likely?`,

        answers: [
            "A. Acute appendicitis",
            "B. Acute pancreatitis",
            "C. Cholecystitis",
            "D. Terminal romantic optimism"
        ],

        correct: [0],

        correctMessage:
            "Migratory periumbilical-to-right-lower-quadrant pain is classic for acute appendicitis."
    },


    // QUESTION 7
    {
        question: `1990s. Dr Satpal tells Dr Lovely:

“Are you IV contrast? Because the moment you entered my circulation, you went straight to my heart.”

After injection into a peripheral vein, contrast first enters which cardiac chamber?`,

        answers: [
            "A. Left atrium",
            "B. Left ventricle",
            "C. Right atrium",
            "D. The chamber of secrets"
        ],

        correct: [2],

        correctMessage:
            "Peripheral venous blood returns through the venae cavae and reaches the right atrium first."
    },


    // QUESTION 8
    {
        // QUESTION 8
{
    question: `Rohan undergoes MRI after recurrent headaches. Imaging is normal.

Dr Satpal shows Amrita the medial temporal lobe and asks which structure is critical for declarative memory consolidation.

Which structure is most important?`,

    answers: [
        "A. Caudate nucleus",
        "B. Hippocampus",
        "C. Substantia nigra",
        "D. Medulla",
        "E. The suspiciously large region apparently occupied by thoughts of Amrita"
    ],

    correct: [1, 4],
    medicalCorrect: [1],
    jokeCorrect: [4],

    correctMessage:
        "The hippocampus is critical for consolidation of new declarative memories.",

    jokeMessage:
        "Rohan-correct. The medical answer is B. The suspiciously large region apparently occupied by thoughts of Amrita remains undescribed in standard neuroanatomy."

    },


    // QUESTION 9
    {
        question: `Dr PK tells Dr Ananya:

“I've managed difficult airways, but I still can't find the words to talk to you.”

Which bedside assessment is commonly used to help predict difficult intubation?`,

        answers: [
            "A. Mallampati classification",
            "B. Glasgow Coma Scale",
            "C. APGAR score",
            "D. Hot-to-crazy ratio"
        ],

        correct: [0],

        correctMessage:
            "Mallampati classification helps assess the airway for potentially difficult intubation. Difficult conversation remains considerably harder to grade."
    },


    // QUESTION 10
    {
        question: `Dr PK tells Dr Ananya:

“Are you propofol? Because one look at you and I'm completely knocked out.”

Propofol primarily enhances activity at which receptor?`,

        answers: [
            "A. NMDA",
            "B. GABA-A",
            "C. Dopamine D2",
            "D. Love receptor 5-HT69"
        ],

        correct: [1],

        correctMessage:
            "Propofol primarily potentiates inhibitory neurotransmission through GABA-A receptors."
    },


    // QUESTION 11
    {
        question: `1990s. After a significant period of courtship, Dr Satpal tells Dr Lovely:

“Our relationship is like fluid on T2.”

She asks why.

“Because it looks bright.”

Simple fluid on a conventional T2-weighted MRI typically appears:`,

        answers: [
            "A. Dark",
            "B. Bright",
            "C. Invisible",
            "D. Emotionally complicated"
        ],

        correct: [1],

        correctMessage:
            "Simple fluid is typically bright on conventional T2-weighted MRI."
    },


    // QUESTION 12
    {
        question: `After an argument between Amrita and Rohan:

Rohan: “You've broken my heart.”

Amrita: “Severe emotional stress can actually cause Takotsubo cardiomyopathy.”

Rohan: “Can I just be dramatic for five minutes?”

Takotsubo cardiomyopathy classically demonstrates:`,

        answers: [
            "A. Apical ballooning",
            "B. Boot-shaped heart",
            "C. Snowman sign",
            "D. Anatomically fractured myocardium"
        ],

        correct: [0],

        correctMessage:
            "Takotsubo cardiomyopathy classically demonstrates transient apical ballooning."
    },


    // QUESTION 13
    {
        question: `Rohan: “You're constantly on my mind.”

Amrita: “Obsessive thoughts?”

Rohan: “ROMANCE.”

Which brain structure plays a major role in formation of new declarative memories?`,

        answers: [
            "A. Hippocampus",
            "B. Medulla",
            "C. Substantia nigra",
            "D. Nucleus girlfriendus"
        ],

        correct: [0],

        correctMessage:
            "The hippocampus plays a major role in the formation of new declarative memories."
    },


    // QUESTION 14
    {
        question: `Amrita is auscultating Rohan.

Amrita: “Your resting heart rate is 48.”

Rohan: “Because my heart only races for you.”

Amrita rolls her eyes, but unfortunately smiles.

Sinus bradycardia in a well-trained endurance athlete is primarily due to:`,

        answers: [
            "A. Increased vagal tone",
            "B. Decreased vagal tone",
            "C. Complete heart block",
            "D. Girlfriend-induced cardiac efficiency"
        ],

        correct: [0],

        correctMessage:
            "Increased vagal tone is an important contributor to resting sinus bradycardia in trained endurance athletes."
    },


    // QUESTION 15
    {
        question: `Rohan, a wannabe endurance athlete, has physiologic cardiac adaptation to prolonged training.

Which finding is most consistent with athlete's heart?`,

        answers: [
            "A. Pathologic asymmetric septal hypertrophy",
            "B. Physiologic increase in LV mass and chamber dimensions",
            "C. Severe systolic dysfunction",
            "D. Dr Amrita occupying all four chambers"
        ],

        correct: [1, 3],
        medicalCorrect: [1],
        jokeCorrect: [3],

        correctMessage:
            "Physiologic increases in LV mass and chamber dimensions can occur with athletic training.",

        jokeMessage:
            "Rohan-correct. The medical answer is B. Dr Amrita occupying all four chambers remains unsupported by conventional echocardiography."
    },


    // QUESTION 16
    {
        question: `Amrita tells the dunce to exercise to get stronger.

The dunce instead asks:

“Why can't people with bad eyesight just exercise their eyes until they get stronger?”

Amrita experiences transient loss of speech.

Myopia most commonly occurs when:`,

        answers: [
            "A. Light focuses behind the retina",
            "B. Light focuses in front of the retina",
            "C. The optic nerve becomes lazy",
            "D. The eye has skipped eye-day at the gym"
        ],

        correct: [1],

        correctMessage:
            "In myopia, parallel light rays are focused in front of the retina when accommodation is relaxed. Eye-day remains medically unsupported."
    },


    // QUESTION 17
    {
        question: `A singer notices difficulty reaching high notes following neck surgery. Her speaking voice is relatively preserved.

Injury to which nerve is most likely?`,

        answers: [
            "A. Recurrent laryngeal nerve",
            "B. External branch of the superior laryngeal nerve",
            "C. Internal branch of the superior laryngeal nerve",
            "D. Hypoglossal nerve",
            "E. Boyfriend, after requesting the high note for the seventh time"
        ],

        correct: [1],

        correctMessage:
            "The external branch of the superior laryngeal nerve supplies the cricothyroid, which tenses and elongates the vocal folds to increase pitch."
    },


    // QUESTION 18
    {
        question: `A 27-year-old man asks his physician girlfriend for consent to give her a hickey on the lateral aspect of her neck. She agrees.

The following morning, she notices a painless, nonblanching, violaceous discoloration at the site.

Which mechanism most likely explains this finding?`,

        answers: [
            "A. Extravasation of erythrocytes following rupture of superficial dermal capillaries",
            "B. Histamine-mediated dilation of intact dermal vessels",
            "C. Immune complex deposition in small vessels",
            "D. Platelet destruction due to an acquired autoantibody",
            "E. Acute depletion of clotting factors secondary to boyfriend activity"
        ],

        correct: [0],

        correctMessage:
            "A hickey is traumatic purpura caused by rupture of superficial capillaries and extravasation of erythrocytes into surrounding tissue."
    },


    // QUESTION 19
    {
        question: `A 27-year-old man notices that his heart rate increases from 58/min to 105/min when his girlfriend unexpectedly walks into the room wearing a dress he particularly likes.

ECG shows sinus rhythm.

Which mechanism most likely explains this response?`,

        answers: [
            "A. Increased vagal tone",
            "B. β₁-adrenergic stimulation of the SA node",
            "C. Complete AV block",
            "D. Reduced catecholamine release",
            "E. Acute redistribution of blood flow away from the prefrontal cortex"
        ],

        correct: [1],

        correctMessage:
            "β₁-adrenergic stimulation of the SA node increases heart rate. Option E remains clinically plausible but regrettably absent from standard physiology textbooks."
    },


    // QUESTION 20
    {
        question: `A man's girlfriend sings to him while playing guitar.

He experiences goosebumps during a particularly emotional section despite normal room temperature.

Goosebumps result from contraction of:`,

        answers: [
            "A. Arrector pili muscles",
            "B. Eccrine glands",
            "C. Piloerector skeletal muscles",
            "D. Dermal fibroblasts",
            "E. Tiny follicular critics expressing musical approval"
        ],

        correct: [0],

        correctMessage:
            "Goosebumps result from sympathetic contraction of smooth arrector pili muscles attached to hair follicles."
    },


    // QUESTION 21
    {
        question: `A 27-year-old man is discussing an interpersonal conflict during a psychiatric assessment.

He acknowledges that he failed to disclose important information to his partner early in their relationship because he feared rejection and exercised poor judgment.

He accepts that withholding the information deprived her of the opportunity to make a fully informed decision. There is no evidence that he intended to deceive her for personal gain or cause psychological harm.

When assessing the moral culpability of his actions, which factor is most important in distinguishing an error of judgment from deliberately malicious conduct?`,

        answers: [
            "A. Intent underlying the behavior",
            "B. Severity of the resulting emotional distress alone",
            "C. Presence of remorse immediately after the event",
            "D. Whether the relationship subsequently ended",
            "E. Serum concentration of common sense"
        ],

        correct: [0],

        correctMessage:
            "Intent is important when distinguishing poor judgment from conduct deliberately undertaken to exploit or harm. Consequences still matter, but do not alone establish malicious intent."
    },


    // QUESTION 22
    {
        question: `A 25-year-old recreational tennis player develops lateral elbow pain that worsens during repeated backhand strokes.

Examination shows tenderness over the lateral epicondyle and pain with resisted wrist extension.

Which tendon is most commonly involved?`,

        answers: [
            "A. Flexor carpi radialis",
            "B. Extensor carpi radialis brevis",
            "C. Palmaris longus",
            "D. Flexor carpi ulnaris",
            "E. The tendon responsible for returning an ex's emotional unforced errors"
        ],

        correct: [1],

        correctMessage:
            "Extensor carpi radialis brevis is commonly implicated in lateral epicondylitis."
    },


    // QUESTION 23
    {
        question: `A woman playing a long tennis match develops an increased heart rate, increased systolic blood pressure, and increased blood flow to exercising skeletal muscle.

Which local metabolite contributes to arteriolar dilation in active muscle?`,

        answers: [
            "A. Endothelin",
            "B. Angiotensin II",
            "C. Adenosine",
            "D. Vasopressin",
            "E. Compliments shouted enthusiastically from courtside"
        ],

        correct: [2],

        correctMessage:
            "Adenosine is one of several local metabolic factors contributing to arteriolar dilation in active skeletal muscle."
    },


    // QUESTION 24
    {
        question: `A woman accidentally gets cosmetic material into her eye. She immediately develops tearing and blinking.

The afferent limb of the corneal reflex is carried by:`,

        answers: [
            "A. CN II",
            "B. CN III",
            "C. CN V1",
            "D. CN VII",
            "E. The cranial nerve responsible for regretting waterproof mascara"
        ],

        correct: [2],

        correctMessage:
            "The afferent limb of the corneal reflex is carried by the ophthalmic division of the trigeminal nerve, CN V1. The efferent limb is CN VII."
    },


    // QUESTION 25
    {
        question: `A woman regularly wears high-heeled shoes.

Compared with standing barefoot, this position chronically places which muscle-tendon unit in a relatively shortened position?`,

        answers: [
            "A. Tibialis anterior",
            "B. Gastrocnemius-soleus complex",
            "C. Hamstrings exclusively",
            "D. Quadriceps exclusively",
            "E. Her boyfriend's attention span whenever she walks past"
        ],

        correct: [1],

        correctMessage:
            "High heels maintain the ankle in plantarflexion, placing the gastrocnemius-soleus/Achilles unit in a relatively shortened position."
    },


    // QUESTION 26
    {
        question: `A singer moves from a low note to a substantially higher note.

Which muscle is particularly important for increasing vocal-fold tension?`,

        answers: [
            "A. Posterior cricoarytenoid",
            "B. Cricothyroid",
            "C. Thyroarytenoid exclusively",
            "D. Lateral cricoarytenoid",
            "E. Musculus Ariana Grande"
        ],

        correct: [1],

        correctMessage:
            "The cricothyroid muscle tenses and elongates the vocal folds, helping increase pitch."
    },


    // QUESTION 27
    {
        question: `Rohan presents because his Amrita is “dangerously sweet.”

His physician, Dr Sudarshan, is regrettably forced to translate this into actual medicine and suspects diabetes mellitus.

Which HbA1c value meets the diagnostic threshold for diabetes in an appropriate clinical setting?`,

        answers: [
            "A. 5.2%",
            "B. 5.6%",
            "C. 5.9%",
            "D. ≥6.5%",
            "E. Direct measurement of Amrita's sweetness"
        ],

        correct: [3, 4],
        medicalCorrect: [3],
        jokeCorrect: [4],

        correctMessage:
            "HbA1c ≥6.5% meets the diagnostic threshold for diabetes when appropriate diagnostic criteria are satisfied.",

        jokeMessage:
            "Rohan-correct. The medical answer is D. Direct measurement of Amrita's sweetness has not yet been standardized."
    },


    // QUESTION 28
    {
        question: `Rohan presents with abdominal pain, vomiting, dehydration, and deep rapid breathing after an interaction with Amrita.

Laboratory studies show glucose 410 mg/dL, bicarbonate 10 mEq/L, and elevated serum ketones.

His respiratory pattern is best described as:`,

        answers: [
            "A. Cheyne-Stokes respiration",
            "B. Biot respiration",
            "C. Kussmaul respiration",
            "D. Apneustic breathing",
            "E. Heavy sighing after Amrita says “we need to talk”"
        ],

        correct: [2, 4],
        medicalCorrect: [2],
        jokeCorrect: [4],

        correctMessage:
            "Kussmaul respiration is deep, rapid breathing associated with severe metabolic acidosis, classically seen in DKA.",

        jokeMessage:
            "Rohan-correct. The medical answer is C. Heavy sighing after “we need to talk” has yet to enter the respiratory classifications."
    },


    // QUESTION 29
    {
        question: `Rohan tells his physician:

“Doctor, I think Amrita gave me diabetes because she's simply too sweet.”

Which response is most medically accurate?`,

        answers: [
            "A. “Correct. Romantic sweetness is an established diabetogenic exposure.”",
            "B. “Only if exposure exceeds 150 Amritas/mL.”",
            "C. “Diabetes results from abnormalities of insulin secretion/action, not your girlfriend being adorable.”",
            "D. “You require immediate cessation of Amrita exposure.”",
            "E. “I am referring both of you to endocrinology because I no longer wish to participate in this conversation.”"
        ],

        correct: [0, 2],
        medicalCorrect: [2],
        jokeCorrect: [0],

        correctMessage:
            "Diabetes mellitus results from abnormalities in insulin secretion, insulin action, or both. Girlfriend adorableness is not a recognised diabetogenic exposure.",

        jokeMessage:
            "Rohan-correct. The actual medical answer is C. Romantic sweetness remains unsupported as a cause of diabetes despite vigorous lobbying."
    },


    // QUESTION 30
    {
        question: `Rohan dreams about Amrita and wakes up deeply annoyed that his own brain has apparently joined the conspiracy.

Vivid dreaming is most strongly associated with which sleep stage?`,

        answers: [
            "A. N1",
            "B. N2",
            "C. N3",
            "D. REM",
            "E. AMR, or Amrita Memory Reactivation sleep"
        ],

        correct: [3],

        correctMessage:
            "Vivid dreaming is most strongly associated with REM sleep."
    },


    // QUESTION 31
    {
        question: `Rohan gets a chest X-ray done, which is later examined by the radiologist Dr Satpal in both Amrita's and Rohan's presence.

Radiologist: “What do you see?”

Rohan: “Amrita.”

Radiologist: “On the X-ray.”

Rohan: “Still Amrita.”

Amrita: “Please ignore him, Dad.”

The radiologist points to the prominent lower left contour of the cardiac silhouette.

Which chamber forms this border?`,

        answers: [
            "A. Right atrium",
            "B. Right ventricle",
            "C. Left atrium",
            "D. Left ventricle",
            "E. Amrita, because apparently anatomy is now optional"
        ],

        correct: [3],

        correctMessage:
            "The left ventricle forms the lower left cardiac border on a frontal chest radiograph."
    },


    // QUESTION 32
    {
        question: `Rohan tells Amrita:

“My kidneys filter about 180 litres a day, and somehow they still can't filter you out of my thoughts.”

Amrita elects not to address the second half.

Which substance is normally freely filtered at the glomerulus and almost completely reabsorbed in the proximal tubule?`,

        answers: [
            "A. Albumin",
            "B. Glucose",
            "C. Erythrocytes",
            "D. Immunoglobulin G",
            "E. Memories of Amrita"
        ],

        correct: [1],

        correctMessage:
            "Glucose is freely filtered at the glomerulus and is normally almost completely reabsorbed in the proximal tubule."
    },


    // QUESTION 33
    {
        question: `Rohan becomes dehydrated after a long run but insists that seeing Amrita has restored him spiritually.

His kidneys remain unconvinced.

Which hormone increases water reabsorption by promoting insertion of aquaporin-2 channels into collecting-duct principal cells?`,

        answers: [
            "A. Aldosterone",
            "B. ADH",
            "C. ANP",
            "D. Renin",
            "E. Amrita-derived hydration factor"
        ],

        correct: [1],

        correctMessage:
            "ADH acts on V2 receptors and promotes insertion of aquaporin-2 channels into collecting-duct principal cells."
    },


    // QUESTION 34
    {
        question: `Rohan tells Amrita:

“You're like bilirubin.”

Amrita looks alarmed.

“Because apparently I can't get you out of my system without conjugating my feelings first.”

Which enzyme conjugates bilirubin in hepatocytes?`,

        answers: [
            "A. HMG-CoA reductase",
            "B. UDP-glucuronosyltransferase",
            "C. Alkaline phosphatase",
            "D. 5-alpha reductase",
            "E. UDP-glucuronosyltransferase of unresolved romantic affairs"
        ],

        correct: [1],

        correctMessage:
            "UDP-glucuronosyltransferase conjugates bilirubin in hepatocytes, making it more water-soluble for biliary excretion."
    },


    // QUESTION 35
    {
        question: `Rohan insists his glucosuria results from Amrita being “too sweet.”

Under normal circumstances, most filtered glucose is reabsorbed in which part of the nephron?`,

        answers: [
            "A. Proximal convoluted tubule",
            "B. Thin descending limb",
            "C. Thick ascending limb",
            "D. Collecting duct",
            "E. Romantic convoluted tubule"
        ],

        correct: [0],

        correctMessage:
            "Filtered glucose is normally reabsorbed in the proximal tubule."
    },


    // QUESTION 36
    {
        question: `Amrita asks Rohan to flex his elbow while she palpates his biceps.

Rohan complies with suspicious enthusiasm.

The biceps brachii is primarily innervated by:`,

        answers: [
            "A. Radial nerve",
            "B. Musculocutaneous nerve",
            "C. Median nerve",
            "D. Axillary nerve",
            "E. The nerve activated when one's girlfriend says, “Flex.”"
        ],

        correct: [1],

        correctMessage:
            "The biceps brachii is innervated by the musculocutaneous nerve, primarily from C5-C6 roots."
    },


    // QUESTION 37
    {
        question: `After Amrita says she likes his arms, Rohan performs an unreasonable number of biceps curls the next morning.

Forty-eight hours later, he develops muscle soreness without weakness or swelling.

Which diagnosis is most likely?`,

        answers: [
            "A. Compartment syndrome",
            "B. Delayed-onset muscle soreness",
            "C. Rhabdomyolysis",
            "D. Muscular dystrophy",
            "E. Acute Amrita-induced hypertrophy attempt"
        ],

        correct: [1],

        correctMessage:
            "Delayed-onset muscle soreness typically develops 24–72 hours after unfamiliar or excessive exercise."
    },


    // QUESTION 38
    {
        question: `While playing tennis, Rohan develops pain when initiating shoulder abduction.

Examination suggests a rotator-cuff injury.

Which tendon is most likely affected?`,

        answers: [
            "A. Teres major",
            "B. Supraspinatus",
            "C. Pectoralis major",
            "D. Latissimus dorsi",
            "E. Trapezius, which Amrita has specifically requested remain unharmed"
        ],

        correct: [1],

        correctMessage:
            "The supraspinatus initiates approximately the first 15° of shoulder abduction and is a commonly injured rotator-cuff tendon."
    },


    // QUESTION 39
    {
        question: `Amrita unexpectedly compliments Rohan.

He feels a brief “skipped beat.”

ECG demonstrates an isolated premature ventricular complex followed by a compensatory pause.

Why does the subsequent normal beat often feel unusually forceful?`,

        answers: [
            "A. Reduced ventricular filling",
            "B. Increased ventricular filling during the compensatory pause",
            "C. Complete loss of preload",
            "D. Reduced stroke volume",
            "E. The myocardium attempting to make the metaphor embarrassingly literal"
        ],

        correct: [1],

        correctMessage:
            "The compensatory pause allows increased ventricular filling. Greater end-diastolic volume contributes to a more forceful subsequent contraction."
    },


    // QUESTION 40
    {
        question: `Rohan presents with polyuria, polydipsia, and nocturia.

When asked about risk factors, he states:

“Amrita exceptionally sweet. Chronic exposure probably did this.”

His physician, Dr Sudarshan, ignores this contribution to the history.

Why does significant hyperglycemia cause polyuria?`,

        answers: [
            "A. Suppression of ADH",
            "B. Osmotic diuresis following glucosuria",
            "C. Increased aldosterone activity",
            "D. Reduced renal perfusion",
            "E. Renal excretion of excess girlfriend-derived sweetness"
        ],

        correct: [1],

        correctMessage:
            "Once filtered glucose exceeds tubular reabsorptive capacity, glucose remains within tubular fluid and produces osmotic diuresis."
    },


    // QUESTION 41
    {
        question: `Rohan tells Amrita:

“If you rejected me immunologically, what type of hypersensitivity would it be?”

Amrita: “Psychiatry is downstairs.”

Immediate hypersensitivity reactions are primarily mediated by:`,

        answers: [
            "A. IgG",
            "B. IgE",
            "C. CD8+ T cells",
            "D. Immune complexes",
            "E. Anti-boyfriend antibodies"
        ],

        correct: [1],

        correctMessage:
            "Type I immediate hypersensitivity is mediated by IgE bound to mast cells and basophils."
    },


    // QUESTION 42
    {
        question: `Rohan gets a small cut while making pasta for Amrita.

Within minutes, the area becomes red and warm.

These early features of acute inflammation are largely produced by:`,

        answers: [
            "A. Arteriolar vasodilation",
            "B. Arteriolar vasoconstriction",
            "C. Reduced vascular permeability",
            "D. Lymphatic obstruction",
            "E. Local embarrassment"
        ],

        correct: [0],

        correctMessage:
            "Arteriolar vasodilation increases local blood flow and produces the redness and warmth of acute inflammation."
    },


    // QUESTION 43
    {
        question: `Rohan receives a superficial cut while attempting an unnecessarily elaborate stunt to impress Amrita.

Which collagen type predominates early in granulation tissue and is later replaced by stronger collagen?`,

        answers: [
            "A. Type I",
            "B. Type II",
            "C. Type III",
            "D. Type IV",
            "E. Type L-O-V-E"
        ],

        correct: [2],

        correctMessage:
            "Early wound healing features type III collagen, which is subsequently remodeled toward predominantly type I collagen."
    },


    // QUESTION 44
    {
        question: `Rohan and Amrita go on a trek. As they ascend rapidly to 3,500 metres, Amrita pulls Rohan's leg about becoming breathless.

Rohan: “That's because you take my breath away.”

Amrita: “We're at 3,500 metres.”

Rohan: “Can't both be true?”

The principal environmental cause of hypoxemia at high altitude is:`,

        answers: [
            "A. Reduced percentage of oxygen in atmospheric air",
            "B. Reduced barometric pressure and therefore reduced inspired PO₂",
            "C. Increased atmospheric CO₂",
            "D. Reduced hemoglobin concentration immediately upon ascent",
            "E. Amrita consuming the available oxygen"
        ],

        correct: [1],

        correctMessage:
            "The oxygen fraction remains approximately 21%, but falling barometric pressure reduces inspired PO₂."
    },


    // QUESTION 45
    {
        question: `Rohan claims he suddenly developed vertigo.

Amrita asks whether the room is spinning.

Rohan: “Only when you're in it.”

Amrita: “I'm doing the Dix-Hallpike test.”

Benign paroxysmal positional vertigo most commonly involves which semicircular canal?`,

        answers: [
            "A. Anterior",
            "B. Posterior",
            "C. Horizontal exclusively",
            "D. All equally",
            "E. Romantic semicircular canal"
        ],

        correct: [1],

        correctMessage:
            "The posterior semicircular canal is the most commonly affected canal in BPPV."
    },


    // QUESTION 46
    {
        question: `Rohan tells Amrita:

“You've colonized my thoughts.”

Amrita: “Colonization does not necessarily mean infection.”

Which statement best distinguishes colonization from infection?`,

        answers: [
            "A. Colonization always causes tissue damage",
            "B. Colonization is presence/growth of microorganisms without necessarily producing disease",
            "C. Infection never evokes an immune response",
            "D. Colonization occurs only in hospitals",
            "E. Colonization is when Amrita occupies Rohan's thoughts without paying rent"
        ],

        correct: [1, 4],
        medicalCorrect: [1],
        jokeCorrect: [4],

        correctMessage:
            "Colonization refers to the presence and growth of microorganisms without necessarily causing tissue invasion, damage, or clinical disease.",

        jokeMessage:
            "Rohan-correct. The medical answer is B. Amrita's occupation of cortical real estate remains outside accepted microbiological definitions."
    },


    // QUESTION 47
    {
        question: `The Lord Dunce of Madhupore develops watery diarrhea after prolonged broad-spectrum antibiotic therapy.

Which organism is strongly associated with pseudomembranous colitis?`,

        answers: [
            "A. Clostridioides difficile",
            "B. Vibrio cholerae",
            "C. Salmonella Typhi",
            "D. Shigella dysenteriae",
            "E. Clostridium relationshipii, following excessive exposure to toxic situations"
        ],

        correct: [0],

        correctMessage:
            "Clostridioides difficile is strongly associated with antibiotic-associated diarrhea and pseudomembranous colitis."
    },


    // QUESTION 48
    {
        question: `Rohan tells Amrita:

“You're like penicillin. You weaken my walls.”

Amrita: “Bacterial walls.”

β-lactam antibiotics inhibit bacterial growth primarily by interfering with:`,

        answers: [
            "A. DNA gyrase",
            "B. Protein synthesis at the 30S ribosome",
            "C. Peptidoglycan cross-linking",
            "D. Folate synthesis",
            "E. Emotional cell-wall integrity"
        ],

        correct: [2],

        correctMessage:
            "β-lactams bind penicillin-binding proteins and inhibit transpeptidation, preventing normal peptidoglycan cross-linking."
    },


    // QUESTION 49
    {
        question: `Rohan injures his knee while attempting an unnecessarily elaborate stunt to impress Amrita.

A twisting injury causes immediate swelling and instability. Lachman testing demonstrates excessive anterior translation of the tibia.

Which structure is injured?`,

        answers: [
            "A. PCL",
            "B. ACL",
            "C. MCL",
            "D. LCL",
            "E. Anterior Courtship Ligament"
        ],

        correct: [1],

        correctMessage:
            "The Lachman test assesses ACL integrity. ACL disruption permits excessive anterior translation of the tibia relative to the femur."
    },


    // QUESTION 50
    {
        question: `Rohan develops fever, severe myalgia and retro-orbital pain.

Amrita asks whether he has dengue.

Rohan: “The pain behind my eyes is because I haven't seen you.”

Which diagnosis fits the actual clinical picture?`,

        answers: [
            "A. Dengue fever",
            "B. Rabies",
            "C. Kala-azar",
            "D. Tetanus",
            "E. Acute Amrita visual deprivation syndrome"
        ],

        correct: [0, 4],
        medicalCorrect: [0],
        jokeCorrect: [4],

        correctMessage:
            "Fever, severe myalgia and retro-orbital pain are characteristic features of dengue fever.",

        jokeMessage:
            "Rohan-correct. The medically recognised answer is A: dengue fever. Acute Amrita visual deprivation syndrome has not yet received an ICD code."
    },


    // QUESTION 51
    {
        question: `Rohan tells Amrita:

“You must be ATP because you're my source of energy.”

Amrita: “That is not how relationships or oxidative phosphorylation work.”

Most ATP during aerobic metabolism is generated by:`,

        answers: [
            "A. Glycolysis alone",
            "B. Oxidative phosphorylation",
            "C. Urea cycle",
            "D. Pentose phosphate pathway",
            "E. Compliment-driven phosphorylation"
        ],

        correct: [1],

        correctMessage:
            "Most ATP during aerobic cellular metabolism is generated through oxidative phosphorylation in the mitochondrial inner membrane."
    }

];


// ======================================================
// QUIZ STATE
// ======================================================

let currentQuestion = 0;
let answered = false;
let score = 0;


// ======================================================
// HTML ELEMENTS
// ======================================================

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const finalScreen = document.getElementById("final-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");

const questionLabel = document.getElementById("question-label");
const progressCount = document.getElementById("progress-count");
const progressBar = document.getElementById("progress-bar");


// ======================================================
// START
// ======================================================

startBtn.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

    answered = false;

    const questionData = questions[currentQuestion];
    const displayedNumber = currentQuestion + 1;

    questionLabel.textContent =
        `Question ${displayedNumber} of ${questions.length}`;

    progressCount.textContent =
        `${displayedNumber} / ${questions.length}`;

    const progressPercentage =
        (displayedNumber / questions.length) * 100;

    progressBar.style.width =
        `${progressPercentage}%`;

    questionElement.textContent =
        questionData.question;

    answersElement.innerHTML = "";
    feedbackElement.innerHTML = "";
    feedbackElement.className = "feedback";

    nextBtn.style.display = "none";

    questionData.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answersElement.appendChild(button);

    });

}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const questionData =
        questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer-btn");

    const isAccepted =
        questionData.correct.includes(selectedIndex);


    // CORRECT
    if (isAccepted) {

        score++;

        selectedButton.classList.add("correct");


        // JOKE-CORRECT
        if (
            questionData.jokeCorrect &&
            questionData.jokeCorrect.includes(selectedIndex)
        ) {

            feedbackElement.classList.add("feedback-correct");

            feedbackElement.innerHTML = `
                <div class="feedback-title">
                    ✓ Rohan-correct
                </div>

                <div class="feedback-text">
                    ${questionData.jokeMessage}
                </div>
            `;

        }


        // MEDICALLY CORRECT
        else {

            feedbackElement.classList.add("feedback-correct");

            feedbackElement.innerHTML = `
                <div class="feedback-title">
                    ✓ Correct!
                </div>

                <div class="feedback-text">
                    ${questionData.correctMessage}
                </div>
            `;

        }

    }


    // WRONG
    else {

        selectedButton.classList.add("wrong");

        const answersToHighlight =
            questionData.medicalCorrect ||
            questionData.correct;

        answersToHighlight.forEach(function (correctIndex) {

            allButtons[correctIndex].classList.add("correct");

        });

        feedbackElement.classList.add("feedback-wrong");

        feedbackElement.innerHTML = `
            <div class="feedback-title">
                ✕ Not quite
            </div>

            <div class="feedback-text">
                ${questionData.correctMessage}
            </div>
        `;

    }


    // LOCK ANSWERS
    allButtons.forEach(function (button) {

        button.disabled = true;

    });


    // BUTTON TEXT
    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent = "See My Score →";

    }

    else if (currentQuestion === questions.length - 2) {

        nextBtn.textContent = "Final Question →";

    }

    else {

        nextBtn.textContent = "Next Question →";

    }

    nextBtn.style.display = "inline-flex";

}


// ======================================================
// NEXT
// ======================================================

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    else {

        showFinalScreen();

    }

});


// ======================================================
// FINAL SCREEN
// ======================================================

function showFinalScreen() {

    quizScreen.classList.remove("active");
    finalScreen.classList.add("active");

    document.getElementById("final-score").textContent =
        `${score} / ${questions.length}`;

    const percentage =
        Math.round((score / questions.length) * 100);

    document.getElementById("percentage-score").textContent =
        `${percentage}%`;

    let message = "";

    if (percentage === 100) {

        message =
            "Perfect score. Diagnosis: excessively competent doctorni. Prognosis: excellent.";

    }

    else if (percentage >= 90) {

        message =
            "Outstanding. At this point the revision capsule appears to require revision more urgently than you do.";

    }

    else if (percentage >= 80) {

        message =
            "Excellent. NEET PG appears to be in significantly more danger than you are.";

    }

    else if (percentage >= 60) {

        message =
            "Solid performance. A few neurons briefly went on tea break, but the overall prognosis is excellent.";

    }

    else if (percentage >= 40) {

        message =
            "Respectable. The medical knowledge is there; Rohan's questionable distractors merely caused temporary diagnostic confusion.";

    }

    else {

        message =
            "Score temporarily withheld from the Medical Council in the interests of national security.";

    }

    document.getElementById("score-message").textContent =
        message;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
