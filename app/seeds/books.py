from app.models import db, Book, environment, SCHEMA

def seed_books():
    corduroy = Book(
        title='Corduroy',
        author='Don Freeman',
        summary='Corduroy has been on the department store shelf for a long time... Corduroy, with his unaffected simplicity and childlike emotion, is one of the best-loved bears in children\'s books. His story has become an irresistible childhood classic, as basic and appealing as a small bear\'s desire for a home and a friend and the perfect fulfillment found in the devotion of a young girl.',
        author_about="Don Freeman was a painter, printmaker, cartoonist, children's book author, and illustrator. He was born in San Diego, California, attended high school in Missouri, and later moved to New York City where he studied etching with John Sloan. Frequent subjects included Broadway theatre, politics, and the circus. He was also a jazz musician, and the brother of circus entrepreneur Randy Freeman.",
        thumbnail="https://images-us.bookshop.org/ingram/9780451470799.jpg"
    )
    caps = Book(
        title='Caps for sale',
        author="Esphyr Slobodkina",
        summary="Caps for Sale is a timeless classic beloved by millions...one of the most popular picture books ever published! Children will delight in following the peddler’s efforts to outwit the monkeys and will ask to read it again and again. Caps for Sale is an excellent easy-to-read book that includes repetition, patterns, and colors, perfect for early readers. This tale of a peddler and a band of mischievous monkeys is filled with warmth, humor, and simplicity and also teaches children about problem and resolution.",
        author_about=
        "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928",
        thumbnail='https://images-us.bookshop.org/ingram/9780064431439.jpg'
    )
    maniac = Book(
        title='Maniac Magee',
        author='Jerry Spinelli',
        summary="Jeffrey Lionel 'Maniac' Magee might have lived a normal life if a freak accident hadn't made him an orphan. After living with his unhappy and uptight aunt and uncle for eight years, he decides to run--and not just run away, but run. This is where the myth of Maniac Magee begins, as he changes the lives of a racially divided small town with his amazing and legendary feats.",
        author_about="Jerry Spinelli is the author of many immensely popular books for young readers, including Eggs, Stargirl, Space Station Seventh Grade, Newbery Honor Book Wringer, Newbery Award winner Maniac Magee, and the picture books Mama Seeton's Whistle and I Can Be Anything! He lives in Pennsylvania with his wife and fellow author, Eileen.",
        thumbnail="https://images-us.bookshop.org/ingram/9780316809061.jpg"
    )
    holes = Book(
        title="Holes",
        author="Louis Sachar",
        summary="Stanley Yelnats is under a curse. A curse that began with his no-good-dirty-rotten-pig-stealing-great-great-grandfather and has since followed generations of Yelnatses. Now Stanley has been unjustly sent to a boys’ detention center, Camp Green Lake, where the boys build character by spending all day, every day digging holes exactly five feet wide and five feet deep. There is no lake at Camp Green Lake. But there are an awful lot of holes...",
        author_about="Louis Sachar was born in New York. He was inspired to write children's books after working as a teacher's aide to gain extra credit. After graduation he worked in a sweater warehouse in Connecticut and wrote at night. He was soon fired from that job and moved onto law school where in his first week of study Sideways Stories From Wayside School was published. In 2000 Louis Sacher wrote Holes which became both an instant classic and a film starring Sigourney Weaver. Holes was his first book to be published in the UK and continues to prove popular among younger readers. Once Louis Sachar begins writing a new book he refuses to talk to anyone until it is finished and entry to his office is barred apart from his two dogs. The Cardturner is his new book which publishes in 2010.",
        thumbnail="https://images-us.bookshop.org/ingram/9780440414803.jpg"
    )
    tuck = Book(
        title="Tuck Everlasting",
        author="Natalie Babbitt",
        summary="When 10-year-old Winnie Foster stumbles upon the Tuck family's disturbing secret, she is forced to come to terms with her conflicting emotions. She feels drawn to the loving, gentle, and rather eccentric Tucks, but what they tell her is too incredible to be believed. Doomed to, or blessed with, eternal life after drinking from a magic spring, the Tuck family tries to make Winnie understand that the terrible magic of the forest spring can never be revealed. The consequences to the world could prove to be disastrous!",
        author_about="Artist and writer Natalie Babbitt (1932–2016) is the award-winning author of the modern classic Tuck Everlasting and many other brilliantly original books for young people. As the mother of three small children, she began her career in 1966 by illustrating The Forty-Ninth Magician, written by her husband, Samuel Babbitt. She soon tried her own hand at writing, publishing two picture books in verse. Her first novel, The Search for Delicious, was published in 1969 and established her reputation for creating magical tales with profound meaning. Kneeknock Rise earned Babbitt a Newbery Honor in 1971, and she went on to write―and often illustrate―many more picture books, story collections, and novels. She also illustrated the five volumes in the Small Poems series by Valerie Worth. In 2002, Tuck Everlasting was adapted into a major motion picture, and in 2016 a musical version premiered on Broadway. Born and raised in Ohio, Natalie Babbitt lived her adult life in the Northeast.",
        thumbnail="https://images-us.bookshop.org/ingram/9780312369811.jpg"
    )
    snowman = Book(
        title="The Snowman",
        author="Raymond Briggs",
        summary="A wordless story. The pictures have 'the hazy softness of air in snow.' A little boy rushes out into the wintry day to build a snowman, which comes alive in his dreams that night. The experience is one that neither he nor young 'readers' will ever regret or forget.",
        author_about="Raymond Redvers Briggs (born 18 January 1934) is an English illustrator, cartoonist, graphic novelist and author who has achieved critical and popular success among adults and children. He is best known in Britain for his story The Snowman, a book without words whose cartoon adaptation is televised and whose musical adaptation is staged every Christmas.",
        thumbnail="https://images-us.bookshop.org/ingram/9780394884660.jpg"
    )
    flotsam = Book(
        title="Flotsam",
        author="David Wiesner",
        summary="A beach day is the springboard to a wildly imaginative exploration of fantastical mysteries of the deep—and of human connections through time.",
        author_about="David Wiesner is one of the best-loved and most highly acclaimed picture book creators in the world. His books have been translated into more than a dozen languages and have won numerous awards in the United States and abroad. Three of the picture books he both wrote and illustrated became instant classics when they won the prestigious Caldecott Medal: Tuesday in 1992, The Three Pigs in 2002, and Flotsam in 2007, making him only the second person in the award's long history to have won three times. He has also received two Caldecott Honors, for Free Fall and Sector 7. Wiesner grew up in suburban New Jersey, known to his classmates as 'the kid who could draw.' He went on to become a student at the Rhode Island School of Design, where he was able to commit himself to the full-time study of art and to explore further his passion for visual storytelling. He soon discovered that picture books were the perfect vehicle for his work. Wiesner generally spends several years creating each new book. Many versions are sketched and revised until the story line flows smoothly and each image works the way he wants it to. He creates three-dimensional models of objects he can't observe in real life, such as flying pigs and lizards standing upright, to add authenticity to his drawings. David Wiesner lives with his family outside Philadelphia.",
        thumbnail="https://images-us.bookshop.org/ingram/9780618194575.jpg"
    )
    compass = Book(
        title="The Golden Compass",
        author="Philip Pullman",
        summary="Lyra is rushing to the cold, far North, where witch clans and armored bears rule. North, where the Gobblers take the children they steall—including her friend Roger. North, where her fearsome uncle Asriel is trying to build a bridge to a parallel world. Can one small girl make a difference in such great and terrible endeavors? This is Lyra: a savage, a schemer, a liar, and as fierce and true a champion as Roger or Asriel could want. But what Lyra doesn't know is that to help one of them will be to betray the other... ",
        author_about="PHILIP PULLMAN is one of the most acclaimed writers working today. He is best known for the His Dark Materials trilogy, which has been named one of the top 100 books of all time by Newsweek and one of the all-time greatest novels by Entertainment Weekly. Pullman was knighted for his services to literature in the 2019 New Year Honours. The Book of Dust, Pullman's eagerly anticipated return to the world of His Dark Materials, will also be a book in three parts. It began with La Belle Sauvage and continues with The Secret Commonwealth.",
        thumbnail="https://images-us.bookshop.org/ingram/9780440418320.jpg"
    )
    winnDixie = Book(
        title="Because of Winn-Dixie",
        author="Kate DiCammilo",
        summary="One summer's day, 10-year-old India Opal Buloni goes down to the local supermarket for some groceries - and comes home with a dog. But Winn-Dixie is no ordinary dog. It's because of Winn-Dixie that Opal begins to make friends. And it's because of Winn-Dixie that she finally dares to ask her father about her mother, who left when Opal was three. In fact, as Opal admits, just about everything that happens that summer is because of Winn-Dixie.",
        author_about="Kate DiCamillo is the acclaimed author of many books for young readers, including The Tale of Despereaux, winner of the Newbery Medal; Because of Winn-Dixie, a Newbery Honor Book; and The Tiger Rising, a National Book Award finalist. She lives in Minneapolis, Minnesota.",
        thumbnail="https://images-us.bookshop.org/ingram/9781536214352.jpg"
    )
    ivan = Book(
        title="The One and Only Ivan",
        author="Katherine Applegate",
        summary="Having spent twenty-seven years behind the glass walls of his enclosure in a shopping mall, Ivan has grown accustomed to humans watching him. He hardly ever thinks about his life in the jungle. Instead, Ivan occupies himself with television, his friends Stella and Bob, and painting. But when he meets Ruby, a baby elephant taken from the wild, he is forced to see their home, and his art, through new eyes.",
        author_about="Katherine Applegate is the Newbery Medal-winning and #1 New York Times bestselling author of numerous books for young readers, including The One and Only Ivan, The One and Only Bob, Crenshaw, Wishtree, the Roscoe Riley Rules chapter books series, and the Animorphs series. She lives with her husband, who writes as the author Michael Grant, and their children in California.",
        thumbnail="https://images-us.bookshop.org/ingram/9780061992278.jpg"
    )
    dragons = Book(
        title="Dragons Love Tacos",
        author="Adam Rubin",
        summary="Dragons love tacos. They love chicken tacos, beef tacos, great big tacos, and teeny tiny tacos. So if you want to lure a bunch of dragons to your party, you should definitely serve tacos. Buckets and buckets of tacos. Unfortunately, where there are tacos, there is also salsa. And if a dragon accidentally eats spicy salsa . . . oh, boy. You're in red-hot trouble.",
        author_about="Adam Rubin is the #1 New York Times bestselling author of many critically acclaimed picture books, including Dragons Love Tacos, the Those Darn Squirrels trilogy, Gladys the Magic Chicken, High Five, Robo-Sauce, Secret Pizza Party and El Chupacabras, which won the Texas Bluebonnet Award in 2020. Adam's first collection of short stories, The Ice Cream Machine, will be available from Putnam in 2021. Aside from writing, he enjoys hiking, optical illusions, and magic tricks. His favorite color is blue, his favorite food is fried chicken, and his favorite animal is the otter.",
        thumbnail="https://images-us.bookshop.org/ingram/9780803736801.jpg"
    )
    pax = Book(
        title="Pax",
        author="Sara Pennypacker",
        summary="Pax and Peter have been inseparable ever since Peter rescued him as a kit. But one day, the unimaginable happens: Peter's dad enlists in the military and makes him return the fox to the wild.At his grandfather's house, three hundred miles away from home, Peter knows he isn't where he should be—with Pax. He strikes out on his own despite the encroaching war, spurred by love, loyalty, and grief, to be reunited with his fox. Meanwhile Pax, steadfastly waiting for his boy, embarks on adventures and discoveries of his own. . . .",
        author_about="Sara Pennypacker is the author of the #1 New York Times bestselling Pax; the award-winning Clementine series and its spinoff series, Waylon; and the acclaimed novels Summer of the Gypsy Moths and Here in the Real World. She divides her time between Cape Cod, Massachusetts, and Florida. You can visit her online at www.sarapennypacker.com.",
        thumbnail="https://images-us.bookshop.org/ingram/9780062377029.jpg"
    )
    fish = Book(
        title="Fish in a Tree",
        author="Lynda Mullaly Hunt",
        summary="Ally has been smart enough to fool a lot of smart people. Every time she lands in a new school, she is able to hide her inability to read by creating clever yet disruptive distractions. She is afraid to ask for help; after all, how can you cure dumb? However, her newest teacher Mr. Daniels sees the bright, creative kid underneath the trouble maker. With his help, Ally learns not to be so hard on herself and that dyslexia is nothing to be ashamed of. As her confidence grows, Ally feels free to be herself and the world starts opening up with possibilities. She discovers that there's a lot more to her--and to everyone--than a label, and that great minds don't always think alike.",
        author_about="Lynda Mullaly Hunt (www.lyndamullalyhunt.com) has received many honors for her debut novel, One for the Murphys, which is on over twenty state award lists, including Bank Street's 2013 Best Books of the Year. She's a former teacher, and holds writers retreats for the Society of Children's Book Writers and Illustrators. She lives in Connecticut with her husband, two children, impetuous beagle, and beagle-loathing cat.",
        thumbnail="https://images-us.bookshop.org/ingram/9780142426425.jpg"
    )
    escape = Book(
        title="Escape from Mr. Lemoncello's Library",
        author="Chris Grabenstein",
        summary="Kyle Keeley is the class clown, popular with most kids, (if not the teachers), and an ardent fan of all games: board games, word games, and particularly video games. His hero, Luigi Lemoncello, the most notorious and creative game maker in the world, just so happens to be the genius behind the building of the new town library. Lucky Kyle wins a coveted spot to be one of the first 12 kids in the library for an overnight of fun, food, and lots and lots of games. But when morning comes, the doors remain locked. Kyle and the other winners must solve every clue and every secret puzzle to find the hidden escape route. And the stakes are very high.",
        author_about="Chris Grabenstein is the New York Times bestselling author of the wildly popular Mr. Lemoncello series, the Welcome to Wonderland series, and many other books. He is also the coauthor of many page-turners with James Patterson, including the Max Einstein series, and of Shine!, which he cowrote with his wife, J.J. Grabenstein. Chris lives in New York City. Visit Chris at ChrisGrabenstein.com and on Twitter at @CGrabenstein. Look for the latest Mr. Lemoncello books--Mr. Lemoncello's All-Star Breakout Game (available now!) and Mr. Lemoncello and the Titanium Ticket, coming in 2020!",
        thumbnail="https://images-us.bookshop.org/ingram/9780307931474.jpg"
    )
    library = Book(
        title="The Not So Quiet Library",
        author="Zachariah Ohora",
        summary="It's Saturday, which means Oskar and Theodore get to go to the library with their dad! It means donuts for breakfast! And it means endless quiet hours lost in stories. But on this not so quiet Saturday, Oskar and Teddy get a rude surprise when they're interrupted by a five-headed, hangry monster! Will Oskar ever get to finish his book in peace? Will Teddy ever get to gorge on his donuts? Or might both of them hold the secret weapons to taming the beast?",
        author_about="Zachariah OHora is the author-illustrator of the acclaimed No Fits, Nilson! and My Cousin Momo, and the illustrator of the New York Times bestseller Wolfie the Bunny. He lives and works in Narberth, PA, with his wife and sons.",
        thumbnail="https://images-us.bookshop.org/ingram/9780803741409.jpg"
    )
    db.session.add(corduroy)
    db.session.add(caps)
    db.session.add(maniac)
    db.session.add(holes)
    db.session.add(tuck)
    db.session.add(snowman)
    db.session.add(flotsam)
    db.session.add(compass)
    db.session.add(winnDixie)
    db.session.add(ivan)
    db.session.add(dragons)
    db.session.add(pax)
    db.session.add(fish)
    db.session.add(escape)
    db.session.add(library)

def undo_books():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.books RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM books")

    db.session.commit()