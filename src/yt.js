import React, { Component } from "react";

import './yt.css';

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          id: 1,
          title: "  Video 1",
          thumbnailUrl: "https://candid.technology/wp-content/uploads/2019/11/Computer-programming-languages-coding-329090sd-java-python-php-1024x576.jpg",
          likes: 1500,
          views: 25000,
          channelName: "ByteSizedWeb",
          channelLogoUrl: "https://miro.medium.com/max/2400/1*ipCeKRvs4r9xjtl50r2XcA.png",
        },
        {
          id: 2,
          title: "  Video 2",
          thumbnailUrl: "https://th.bing.com/th/id/OIP._-nrmGtXdpHIqQNjgc914wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain",
          likes: 1200,
          views: 18000,
          channelName: "WebCraft101",
          channelLogoUrl: "https://play-lh.googleusercontent.com/XApPLSf2RRXX8CtF7eBOLC-dBhCwFmsEA1seIPRTkwLbmdSsFrpyvZh_8EVDb7GoM3Zg",
        },
        {
            id: 3,
            title: "  Video 3",
            thumbnailUrl: "https://intersog.co.il/handling/assets/uploads/2019/08/shutterstock_1225954372.jpg",
            likes: 2100,
            views: 32000,
            channelName: "TheWebWeavers",
            channelLogoUrl: "https://yt3.ggpht.com/a/AATXAJzlyu9_EAkho1B-MZDVTwwJeoihUsiF32JD7g=s900-c-k-c0xffffffff-no-rj-mo",
          },
          {
            id: 4,
            title: "  Video 4",
            thumbnailUrl: "https://th.bing.com/th/id/OIP.32dJ5JUQehXiuBVLNc_zHQHaEK?w=768&h=432&rs=1&pid=ImgDetMain",
            likes: 500,
            views: 1000,
            channelName: "VirtualVertigo",
            channelLogoUrl: "https://yt3.ggpht.com/a/AGF-l79vKhjv-XzJGKUdXD7DyNuNT1BapATAlr3Trw=s900-mo-c-c0xffffffff-rj-k-no",
          },
          {
            id: 5,
            title: "  Video 5",
            thumbnailUrl: "https://www.owlguru.com/wp-content/uploads/wpallimport/files/bioinformatics-technicians/__(1).jpg",
            likes: 1872,
            views: 15432,
            channelName: "PixelPioneers",
            channelLogoUrl: "https://th.bing.com/th/id/OIP.Y6ldC3PkFTjvkJiH-o3BGwAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
          },
          {
            id: 6,
            title: "  Video 6",
            thumbnailUrl: "https://static.vecteezy.com/system/resources/previews/000/678/463/original/programming-doodle-on-blue-background.jpg",
            likes: 1830,
            views: 5000,
            channelName: "ResponsiveRangers",
            channelLogoUrl: "https://th.bing.com/th/id/OIP.WN3_K861eKagwc8WVqXKvgAAAA?pid=ImgDet&w=474&h=355&rs=1",
          },
          {
            id: 7,
            title: "  Video 7",
            thumbnailUrl: "https://i.ytimg.com/vi/AzaNOwIN4cw/maxresdefault.jpg",
            likes: 143,
            views: 892,
            channelName: "BinaryBuilders",
            channelLogoUrl: "https://th.bing.com/th/id/OIP.xR2-wDKIMYvBbslMEbOF_QHaHa?&rs=1&pid=ImgDetMain",
          },
          {
            id: 8,
            title: "  Video 8",
            thumbnailUrl: "https://miro.medium.com/max/11400/1*8KMMxiDLGxyD4CpsmL0iDg.jpeg",
            likes: 1562,
            views: 18000,
            channelName: "Coding Hall",
            channelLogoUrl: "https://i.pinimg.com/736x/23/a0/9e/23a09edc1ecce308a3dfd68a0ffe749f--philip-glass-composers.jpg",
          },
          {
            id: 9,
            title: "  Video 9",
            thumbnailUrl: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_ae/topics/careers-at-ey/ey-computer-programmer-working-at-home-on-complex-algorithms.jpg",
            likes: 2315,
            views: 8631,
            channelName: "School of Thoughts",
            channelLogoUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118638407/original/842a17bec846c1c91a94c442ba1bd85b6c3bfdee/make-a-cool-youtube-banner-and-logo.jpg",
          },
          {
            id: 10,
            title: "  Video 10",
            thumbnailUrl: "https://www.grunge.com/img/gallery/elon-musk-claims-human-trials-for-neuralink-could-happen-much-sooner-than-you-realize/the-barriers-neuralink-is-facing-1670272448.jpg",
            likes: 1342,
            views: 2134,
            channelName: "HYR Tutorials",
            channelLogoUrl: "https://th.bing.com/th/id/OIP.O3ufRSt3vtQb-G1brxNTCAHaGw?&rs=1&pid=ImgDetMain",
          },
          {
            id: 11,
            title: "  Video 11",
            thumbnailUrl: "https://ixceed-solutions.co.uk/wp-content/uploads/2022/09/Talentpop-scaled.jpg",
            likes: 567,
            views: 2341,
            channelName: "by Heart Club",
            channelLogoUrl: "https://yt3.ggpht.com/a/AATXAJx8i7QR4L9lI-qGxfn48tp-2etDjhR_Iaz1LA=s900-c-k-c0xffffffff-no-rj-mo",
          },
          {
            id: 12,
            title: "  Video 12",
            thumbnailUrl: "https://wallpaperaccess.com/full/3617099.jpg",
            likes: 456,
            views: 789,
            channelName: "Eager Beaver",
            channelLogoUrl: "https://static.freemake.com/blog/wp-content/uploads/2014/08/Top-10-Most-Funny-Youtube-Channels.jpg",
          },
          {
            id: 13,
            title: "  Video 13",
            thumbnailUrl: "https://miro.medium.com/max/3840/1*J4Lkof6K3jZpKrxVXdy-Iw.jpeg",
            likes: 1823,
            views: 24853,
            channelName: "As Easy As ABC",
            channelLogoUrl: "https://www.nf-daoc.de/wallpaper/logo1280x768.png",
          },
          {
            id: 14,
            title: "  Video 14",
            thumbnailUrl: "https://vectormine.b-cdn.net/wp-content/uploads/Programming.jpg",
            likes: 3456,
            views: 45612,
            channelName: "programee Buizz",
            channelLogoUrl: "https://i.pinimg.com/originals/e7/f3/a0/e7f3a0b57b14c85a77a1fc57573544c5.jpg",
          },
          {
            id: 15,
            title: "  Video 15",
            thumbnailUrl: "https://www.seekvisa.com.au/wp-content/uploads/2021/03/Study-Computer-Programming.jpg",
            likes: 1234,
            views: 4321,
            channelName: "From the Old School",
            channelLogoUrl: "https://yt3.ggpht.com/a/AGF-l7_B0MJpiQ0IN5TJJIBhE9X0oWRq1MtJ7Xynsw=s900-c-k-c0xffffffff-no-rj-mo",
          },
          {
            id: 16,
            title: "  Video 16",
            thumbnailUrl: "https://th.bing.com/th/id/R.cc6493ef17f0247b865ade2600b9c028?rik=KXsnMzj4Hhe5dw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f7%2ff%2f40822.jpg&ehk=Cdvau46s8m4i%2fgNoSZkJphay5QensttLl0KOAeS%2fFLY%3d&risl=&pid=ImgRaw&r=0",
            likes: 596,
            views: 1800,
            channelName: "ScriptSerpents",
            channelLogoUrl: "https://yt3.ggpht.com/a/AATXAJzrT88tpYkBzMxhFho_-ipawiK4b3CNJoJU3mvtsA=s900-c-k-c0xffffffff-no-rj-mo",
          },
          {
            id: 17,
            title: "  Video 17",
            thumbnailUrl: "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg",
            likes: 4561,
            views: 21031,
            channelName: "AppAlchemy",
            channelLogoUrl: "https://th.bing.com/th/id/OIP.SKZ50A51OKTNALhqOSgcDQHaHa?rs=1&pid=ImgDetMain",
          },
          {
            id: 18,
            title: "  Video 18",
            thumbnailUrl: "https://www.learnbylayers.com/wp-content/uploads/2023/08/programming-background-with-person-working-with-codes-computer-scaled-1536x1024.jpg",
            likes: 1560,
            views: 2145,
            channelName: "CodeCompanions",
            channelLogoUrl: "https://www.buscabiografias.com/img/people/700x430-Linus-Torvalds.jpg",
          },
          {
            id: 19,
            title: "  Video 19",
            thumbnailUrl: "https://karpagamtech.ac.in/kit/wp-content/uploads/2022/07/Get-an-edge-in-your-career-progress-while-opting-for-Information-Technology-2.jpg",
            likes: 2544,
            views: 5612,
            channelName: "MachineMavens",
            channelLogoUrl: "https://i.pinimg.com/736x/64/77/0b/64770b95c920dd3d0ea7c27b09ed634c--taylor-swift-hair-taylor-swift-style.jpg",
          },
          {
            id: 20,
            title: "  Video 20",
            thumbnailUrl: "https://california-business-lawyer-corporate-lawyer.com/wp-content/uploads/2022/11/man-programmer-software.jpg",
            likes: 8456,
            views: 21000,
            channelName: "DeepLearningDreams",
            channelLogoUrl: "https://yt3.ggpht.com/a/AATXAJw2FM262U1UAtWpMUplFplf3KzaRd3CHDKUqvXX=s900-c-k-c0xffffffff-no-rj-mo",
          },
      ],
    };
  }

  render() {
    return (
      <div >
        <div class="logodiv">
        <img id="logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Youtube logo" />    
        <h1 id="head" >Video Gallery</h1>
        </div>
        <div className="video-gallery">
        {this.state.videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="channel-info">
                <p> {video.channelName}</p>
                <img
                  src={video.channelLogoUrl}
                  alt={`${video.channelName} logo`}
                  className="channel-logo"
                />
              </div>
            <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
            <div className="video-details">
              <h3>{video.title}</h3>
              <p>Likes: {video.likes}</p>
              <p>Views: {video.views}</p>
             
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Youtube;
