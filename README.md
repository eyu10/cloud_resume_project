# cloud_resume_project

Here is my completed cloud resume: ethanyu23.com

This project was the hardest project I have ever attempted.

First, I needed to put my resume into HTML format. Previously it was in PDF format so I had to search for an HTML template to use. The process was a lot more difficult than I anticipated because i had to figure out how to structure everything properly. I never realized how much work went into designing a simple web page. Choosing the right HTML template felt like picking out a suit for a job interview — it had to be just right. Once I found a template I liked, the real challenge began: modifying it to fit my resume. This involved a lot more Googling than I expected, but eventually, I got the hang of it.

Next up was the CSS part. If HTML is the structure of a building, CSS is the paint and decoration. I had some basic knowledge of CSS, but applying it to make my resume look professional was a whole new game. I played around with fonts, colors, and layouts. It was a bit like dressing up the HTML — giving it a personality that matched mine. I must admit, seeing my plain HTML resume transform into something visually appealing was pretty satisfying.

The real excitement began when I had to upload my resume to AWS S3 to create a static website. This was my first real encounter with cloud services. Setting up the S3 bucket was straightforward, but making it serve my resume as a website was a bit tricky. I learned about permissions and how to set up a bucket policy to make my website publicly accessible. It was amazing to think that my resume was now available to anyone on the internet.

Security is a big deal, and HTTPS is like the lock on your front door. I used AWS CloudFront and AWS Certificate Manager for this. It was a bit complex, setting up a distribution on CloudFront and linking it with my S3 bucket. Then, getting a free SSL/TLS certificate from AWS Certificate Manager to serve my website securely was another learning curve. It was quite a process, but knowing that my site was secure gave me peace of mind.

I wanted a custom domain for my resume — something catchy and professional. I used Namecheap to buy a domain and AWS Route 53 for the DNS service. Ethanyu.com was already taken unfortunately. I ultimately ended up chooses ethanyu23 because 23 has always been my favorite number growing up. This part felt a bit like putting a nameplate outside my house. It was fascinating to learn how domain names are pointed to cloud resources and how DNS works.

When first creating my www bucket, I created it in the wrong region. This made it a huge hassle to fix because you cannot simply just go in and change the region. I had to undo a lot of the steps, such as the route 53 permissions. I also was not able to delete and create another bucket in the correct region. I tried to troubleshoot this problem for hours until ultimately going to my professor the next day. When I went to his office, I was actually able to create the new bucket in the correct region this time. It was a cache issue the whole time! Frustrating!!!

JavaScript was used to add a visitor counter to my resume. This small feature required writing some JavaScript code that communicates with the backend. I had to ensure it was correctly integrated into my HTML and CSS. At first i had lot of trouble getting the visitor counter to work. Ultimately, I figured out that the incorrect syntax was causing the troubles. Watching the visitor count increase was a small, yet thrilling victory.

For the visitor counter to work, I needed a database. AWS DynamoDB, a NoSQL database service, came into play here. It was my first experience with NoSQL, and I had to learn how to set it up and connect it to my website. The concept of database integration was new to me, and it was exciting to see how data can be stored and retrieved in the cloud.

Directly connecting my website to the database was a no-go. Instead, I created an API using AWS Lambda and API Gateway. This was where Python came in — I wrote a Lambda function to interact with DynamoDB. API Gateway was a whole new world; it felt like I was building a bridge for my website to communicate with the database.

This project was a journey of immense growth. I ventured into areas of technology I never knew existed. From HTML and CSS to AWS services, each step added a new layer to my understanding of how the web works. The biggest takeaway for me was the realization that learning is an ongoing process, and the more I learned, the more there was to explore.

The Cloud Resume Challenge was more than just a project; it was a practical learning experience that gave me skills I could confidently talk about in a job interview. It wasn’t easy, but it was worth every moment of frustration and triumph. If you’re looking to get hands-on with cloud computing, I can’t recommend this challenge enough. It’s a true test of your skills and a fantastic way to learn and grow.





