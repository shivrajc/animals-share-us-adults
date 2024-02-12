<div class="footer">
    <span class="item"><a href="https://shivrajc.github.io/">Shivaraj</a></span>
    <span class="divider">&#9679;</span>
    <span class="item"><a href="https://makeovermonday.co.uk/">Source: MakeoverMonday | YouGov</a> | 1000 US Adults (18+) surveyed online Apr 5-7, 2023</span>
</div>

<style>
    .footer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        height: 20px;
        /* letter-spacing: 2; */
    }

    .footer span {
        font-size: 10px;
        text-transform: uppercase;        
        letter-spacing: 1px;
        font-weight: 500;
        text-underline-offset: 4px;
    }

    a, a:visited, .divider {
        color: var(--dark-gray-text);
    }


    @media (max-width: 500px) {
        .footer {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
            text-underline-offset: 0px;
            gap: 8px;
        }

        .footer span {
            text-underline-offset: 1px;
        }
        .divider {
            display: none;
        }
  }    
</style>